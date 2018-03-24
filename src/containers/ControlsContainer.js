import { connect } from "react-redux";
import Controls from "../components/Controls";
import { gameEnd } from "../actions";

const mapStateToProps = state => ({
    timer: state.timer,
    numMines: state.timer
});

const mapDispatchToProps = dispatch => ({
    gameEnd: () => {dispatch(gameEnd)}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
