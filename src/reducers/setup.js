const setup = (state = [], action) => {
    switch (action.type) {
        case 'GAME_SETUP':
            return state;
        default:
            return state
    }
} 

export default setup;
