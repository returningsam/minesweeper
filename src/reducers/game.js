const move = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'SELECT_SQUARE':
            return state;
        case 'FLAG_SQUARE':
            return state;
        default:
            return state;
    }
} 

export default move;
