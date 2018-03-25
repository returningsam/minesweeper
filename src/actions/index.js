export const UPDATE_GAME_WIDTH  = "UPDATE_GAME_WIDTH";
export const UPDATE_GAME_HEIGHT = "UPDATE_GAME_HEIGHT";
export const UPDATE_NUM_MINES   = "UPDATE_NUM_MINES";
export const FINALIZE_SETUP     = "FINALIZE_SETUP";
export const SELECT_SQUARE      = "SELECT_SQUARE";
export const FLAG_SQUARE        = "FLAG_SQUARE";
export const NEW_GAME           = "NEW_GAME";
export const LOSE_GAME          = "LOSE_GAME";
export const START_TIMER        = "START_TIMER";
export const STOP_TIMER         = "STOP_TIMER";
export const UPDATE_TIMER       = "UPDATE_TIMER";
export const RESET_TIMER        = "RESET_TIMER";

export const updateWidth = (width) => ({
    type: UPDATE_GAME_WIDTH,
    width
});

export const updateHeight = (height) => ({
    type: UPDATE_GAME_HEIGHT,
    height
});

export const updateNumMines = (num) => ({
    type: UPDATE_NUM_MINES,
    num
});

export const finalizeSetup = () => ({
    type: FINALIZE_SETUP
});

export const selectSquare = (x,y) => ({
    type: SELECT_SQUARE,
    x:x,
    y:y
});

export const flagSquare = (x,y) => ({
    type: FLAG_SQUARE,
    x:x,
    y:y
});

export const newGame = status => ({
    type: NEW_GAME
});

export const loseGame = status => ({
    type: LOSE_GAME
});

export const startTimer = () => ({
    type: START_TIMER
});

export const stopTimer = () => ({
    type: STOP_TIMER
});

export const updateTimer = () => ({
    type: UPDATE_TIMER
});

export const resetTimer = () => ({
    type: RESET_TIMER
});
