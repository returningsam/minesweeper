export const UPDATE_GAME_WIDTH  = "UPDATE_GAME_WIDTH";
export const UPDATE_GAME_HEIGHT = "UPDATE_GAME_HEIGHT";
export const UPDATE_NUM_MINES   = "UPDATE_NUM_MINES";
export const FINALIZE_SETUP     = "FINALIZE_SETUP";
export const SELECT_SQUARE      = "SELECT_SQUARE";
export const GAME_END           = "GAME_END";

export const updateWidth = (width) => ({
    type: UPDATE_GAME_WIDTH,
    width: width
})

export const updateHeight = (height) => ({
    type: UPDATE_GAME_HEIGHT,
    height: height
})

export const updateNumMines = (num) => ({
    type: UPDATE_NUM_MINES,
    num: num
});

export const finalizeSetup = () => ({
    type: FINALIZE_SETUP
});

export const selectSquare = (x,y) => ({
    type: SELECT_SQUARE,
    x,
    y
}) 

export const gameEnd = status => ({
    type: GAME_END,
    status
})
