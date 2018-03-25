import {UPDATE_GAME_WIDTH, UPDATE_GAME_HEIGHT, UPDATE_NUM_MINES, SELECT_SQUARE, NEW_GAME, LOSE_GAME, FINALIZE_SETUP} from "../actions";
import {INITIAL_STATE, randInt} from "../constants";

const defaultSquare = (x,y) => ({
    x:x,
    y:y,
    mine: false,
    hidden: true,
    flag: false,
    numNear: 0
});

const getRandSafeMessage = () => {
    const options = [
        "phew, that was close",
        "so far, so good",
        "this is too much man"
    ];
    return options[randInt(0,options.length-1)];
}

const buildGameBoard = (height,width,numMines) => {
    var gameData = [];
    for (var y = 0; y < height; y++) {
        var row = [];
        for (var x = 0; x < width; x++) row.push(defaultSquare(x,y));
        gameData.push(row);
    }

    for (var i = 0; i < numMines; i++) {
        do {
            var y = randInt(0,gameData.length-1);
            var x = randInt(0,gameData[y].length-1);
        } while (gameData[y][x].mine);

        gameData[y][x].mine = true;

        for (var j = -1; j <= 1; j++) {
            for (var k = -1; k <= 1; k++) {
                if (k === 0 && j === 0) continue;
                var newX = x + k;
                var newY = y + j;
                if (newX >= 0 && newX < width
                    && newY >= 0 && newY < height) {
                    gameData[newY][newX].numNear++;
                }
            }
        }
    }
    return gameData;
}

const expandSelection = (x,y,board) => {
    var next = [];
    for (var j = -1; j <= 1; j++) {
        for (var k = -1; k <= 1; k++) {
            if (k == 0 && j === 0) continue;
            var newX = x + k;
            var newY = y + j;
            if (newX >= 0 && newX < board[0].length &&
                newY >= 0 && newY < board.length &&
                board[newY][newX].hidden &&
                !board[newY][newX].mine) {
                next.push({x:newX,y:newY});
            }
        }
    }
    var removed = [];
    for (var i = 0; i < next.length; i++) {
        var x = next[i].x;
        var y = next[i].y;
        board[y][x].hidden = false;
        var str = x + "-" + y;
        if (removed.indexOf(str) < 0) removed.push(str);
        if (board[y][x].numNear == 0) {
            var temp = expandSelection(x,y,board);
            for (var k = 0; k < temp.length; k++)
                if (removed.indexOf(temp[k]) < 0) removed.push(temp[k])
        }
    }
    return removed;
}

const game = (state = INITIAL_STATE.game, action) => {
    switch (action.type) {
    case UPDATE_GAME_WIDTH:
        return Object.assign({}, state, {
            width: action.width
        });
    case UPDATE_GAME_HEIGHT:
        return Object.assign({}, state, {
            height: action.height
        });
    case UPDATE_NUM_MINES:
        return Object.assign({}, state, {
            numMines: action.num
        });
    case FINALIZE_SETUP:
        console.log(((state.width*state.height) - state.numMines));
        return Object.assign({}, state, {
            gameReady: true,
            gameData: buildGameBoard(state.width,state.height,state.numMines),
            gameStatus: true,
            numLeft: ((state.width*state.height) - state.numMines),
            gameStatusMessage: getRandSafeMessage()
        });
    case SELECT_SQUARE:
        if (!state.gameData[action.y][action.x].hidden) return state;
        
        var tempData = state.gameData.map(function(arr) {return arr.slice()});

        var numRemoved = 1;

        tempData[action.y][action.x].hidden = false;
        if (tempData[action.y][action.x].numNear == 0) {
            var temp = expandSelection(action.x,action.y,tempData);
            console.log(temp);
            numRemoved += temp.length;
        }

        return Object.assign({}, state, {
            gameData: tempData,
            gameStatusMessage: getRandSafeMessage(),
            numLeft: (state.numLeft - numRemoved)
        });
    case LOSE_GAME:
        var tempData = state.gameData.map(function(arr) {return arr.slice()});

        for (var i = 0; i < tempData.length; i++)
            for (var j = 0; j < tempData[i].length; j++)
                if (tempData[i][j].mine) tempData[i][j].hidden = false;

        return Object.assign({}, state, {
            gameData: tempData,
            gameStatus: false,
            gameStatusMessage: "you lose"
        });
    case NEW_GAME:
        return Object.assign({}, state, INITIAL_STATE.game);
    default:
        return state;
    }
} 

export default game;
