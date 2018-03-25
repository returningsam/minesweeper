import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = state => {
    return ({
        gameReady: state.game.gameReady
    })
}

export default connect(
    mapStateToProps,
)(App);
