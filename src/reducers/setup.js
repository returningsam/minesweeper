import {UPDATE_GAME_WIDTH, UPDATE_GAME_HEIGHT, UPDATE_NUM_MINES, SELECT_SQUARE, GAME_END, FINALIZE_SETUP} from "../actions";
import {INITIAL_STATE} from "../constants";

const game = (state = INITIAL_STATE, action) => {
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
    default:
        return state;
    }
} 

export default game;
