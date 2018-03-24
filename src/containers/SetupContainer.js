import { connect } from "react-redux";
import Setup from "../components/Setup";
import { updateWidth, updateHeight, updateNumMines } from "../actions";

const mapStateToProps = state => ({
    gameReady: state.gameReady
})

const mapDispatchToProps = dispatch => ({
    updateWidth: () => {dispatch(updateWidth)},
    updateHeight: () => {dispatch(updateHeight)},
    updateNumMines: () => {dispatch(updateNumMines)}
})

export default connect(
  mapDispatchToProps
)(Setup);
