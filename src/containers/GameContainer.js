import { connect } from "react-redux";
import Game from "../components/Game";
import { loseGame, selectSquare, startTimer, stopTimer, updateTimer } from "../actions";

const mapStateToProps = state => ({
    gameData: state.game.gameData,
    gameStatus: state.game.gameStatus,
    gameReady: state.game.gameReady,
    timerActive: state.timer.active
});

const mapDispatchToProps = dispatch => ({
    selectSquare: (x,y) => {dispatch(selectSquare(x,y))},
    loseGame: () => {dispatch(loseGame())},
    startTimer: () => {dispatch(startTimer())},
    stopTimer: () => {dispatch(stopTimer())},
    updateTimer: () => {dispatch(updateTimer())},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
