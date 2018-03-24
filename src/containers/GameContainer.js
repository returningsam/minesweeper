import { connect } from "react-redux";
import Game from "../components/Game";
import { gameEnd, selectSquare } from "../actions";

const mapStateToProps = state => ({
    gameData: state.game.gameData,
    gameReady: state.game.gameReady
});

const mapDispatchToProps = dispatch => ({
    selectSquare: () => {dispatch(selectSquare)}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
