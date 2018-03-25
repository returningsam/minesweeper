import { UPDATE_TIMER, START_TIMER, RESET_TIMER, STOP_TIMER }  from "../actions";
import { INITIAL_STATE } from "../constants";

const timer = (state = INITIAL_STATE.timer, action) => {
    switch (action.type) {
        case START_TIMER:
            if (state.active) return state;
            return Object.assign({}, state, {
                startTime: (new Date()).getTime(),
                active: true
            });
        case STOP_TIMER:
            if (!state.active) return state;
            return Object.assign({}, state, {
                active: false
            });
        case UPDATE_TIMER:
            return Object.assign({}, state, {
                time: (parseFloat(state.time) + 0.1).toFixed(1)
            });
        case RESET_TIMER:
            return INITIAL_STATE.timer;
        default:
            return state;
    }
} 

export default timer;
