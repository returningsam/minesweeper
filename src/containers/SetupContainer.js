import { connect } from "react-redux";
import Setup from "../components/Setup";
import { updateWidth, updateHeight, updateNumMines, finalizeSetup } from "../actions";

const mapStateToProps = state => {
    return ({
        gameReady: state.game.gameReady,
        width: state.game.width,
        height: state.game.height,
        numMines: state.game.numMines
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        updateWidth:    (ev) => {dispatch(updateWidth(parseInt(ev.target.value)))},
        updateHeight:   (ev) => {dispatch(updateHeight(parseInt(ev.target.value)))},
        updateNumMines: (ev) => {dispatch(updateNumMines(parseInt(ev.target.value)))},
        handleSubmit:   (ev) => {dispatch(finalizeSetup())}
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Setup);
