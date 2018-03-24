import {UPDATE_GAME_WIDTH, UPDATE_GAME_HEIGHT, UPDATE_NUM_MINES, SELECT_SQUARE, GAME_END, FINALIZE_SETUP} from "../actions";
import {INITIAL_STATE} from "../constants";

const game = (state = INITIAL_STATE.game, action) => {
    console.log(state);
    console.log(action);
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
        return Object.assign({}, state, {
            gameReady: true
        });
    case GAME_END:
        return Object.assign({}, state, {
            gameData: INITIAL_STATE.game.gameData,
            gameReady: INITIAL_STATE.game.gameReady,
            timer: INITIAL_STATE.game.timer,
            numMines: INITIAL_STATE.game.numMines,
            width: INITIAL_STATE.game.width,
            height: INITIAL_STATE.game.height
        });
    default:
        return state;
    }
} 

export default game;
