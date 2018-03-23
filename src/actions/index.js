let nextTodoId = 0

export const setupSubmit = (width,height,numMines) => {({
    type: "SETUP_SUBMIT",
    width,
    height,
    numMines
})} 

export const selectSquare = (x,y) => ({
    type: "SELECT_SQUARE",
    x,
    y
}) 

export const gameEnd = status => ({
    type: "GAME_END",
    status
})
