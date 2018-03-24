export const UPDATE_GAME_WIDTH  = "UPDATE_GAME_WIDTH";
export const UPDATE_GAME_HEIGHT = "UPDATE_GAME_HEIGHT";
export const UPDATE_NUM_MINES   = "UPDATE_NUM_MINES";
export const FINALIZE_SETUP     = "FINALIZE_SETUP";
export const SELECT_SQUARE      = "SELECT_SQUARE";
export const GAME_END           = "GAME_END";
export const START_TIMER        = "START_TIMER";
export const UPDATE_TIMER       = "UPDATE_TIMER";
export const RESET_TIMER        = "RESET_TIMER";

export const updateWidth = (width) => ({
    type: UPDATE_GAME_WIDTH,
    width
})

export const updateHeight = (height) => ({
    type: UPDATE_GAME_HEIGHT,
    height
})

export const updateNumMines = (num) => ({
    type: UPDATE_NUM_MINES,
    num
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

export const startTimer = () => ({
    type: START_TIMER
})

export const updateTimer = () => ({
    type: UPDATE_TIMER
})

export const resetTimer = () => ({
    type: RESET_TIMER
})
