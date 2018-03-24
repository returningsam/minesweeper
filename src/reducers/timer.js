import { UPDATE_TIMER, START_TIMER, RESET_TIMER }  from "../actions";
import { INITIAL_STATE } from "../constants";

const timer = (state = INITIAL_STATE.timer, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case START_TIMER:
            return Object.assign({}, state, {
                width: action.width
            });
        case UPDATE_TIMER:
            return Object.assign({}, state, {
                width: action.width
            });
        case RESET_TIMER:
            return INITIAL_STATE.timer
        default:
            return state;
    }
} 

export default timer;
