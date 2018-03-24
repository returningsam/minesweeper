export const updateWidth = (width) => ({
    type: "UPDATE_GAME_WIDTH",
    width,
});

export const updateHeight = (height) => ({
    type: "UPDATE_GAME_HEIGHT",
    height
});

export const updateNumMines = (numMines) => ({
    type: "UPDATE_NUM_MINES",
    numMines
});


export const selectSquare = (x,y) => ({
    type: "SELECT_SQUARE",
    x,
    y
}) 

export const gameEnd = status => ({
    type: "GAME_END",
    status
})
