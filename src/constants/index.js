export const INITIAL_STATE = {
    game: {
        gameData: null,
        gameReady: false,
        gameStatus: false,
        gameStatusMessage: "",
        numMines: 5,
        width: 6,
        height: 6
    },
    timer: {
        active: false,
        time: "0.0",
        startTime: null
    },
};

export const randInt = (min, max) =>
    (Math.floor(Math.random() * (max - min + 1)) + min);
