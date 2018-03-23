import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = state => ({
    gameReady: state.gameReady
})

export default connect(
  mapStateToProps,
)(App);
