import { connect } from "react-redux";
import Game from "../components/Game";
import { gameEnd, selectSquare } from "../actions";

const mapStateToProps = state => ({
    gameData: state.gameData,
    gameReady: state.gameReady
});

const mapDispatchToProps = dispatch => ({
    gameEnd: () => {dispatch(gameEnd)},
    selectSquare: () => {dispatch(selectSquare)}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
