import { connect } from "react-redux";
import Controls from "../components/Controls";
import { loseGame, newGame, stopTimer, resetTimer } from "../actions";

const mapStateToProps = state => {
    return ({
        timer: state.timer,
        numMines: state.game.numMines,
        gameStatus: state.game.gameStatus,
        gameStatusMessage: state.game.gameStatusMessage
    });
}

const mapDispatchToProps = dispatch => ({
    loseGame: () => {dispatch(loseGame())},
    newGame: () => {dispatch(newGame())},
    resetTimer: () => {dispatch(resetTimer())},
    stopTimer: () => {dispatch(stopTimer())}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
