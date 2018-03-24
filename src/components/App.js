import React from "react";
import PropTypes from "prop-types"
import SetupContainer from "../containers/SetupContainer";
import GameContainer from "../containers/GameContainer";
import ControlsContainer from "../containers/ControlsContainer";
import Header from "./Header";

const App = (props) => (
    <div className="grid">
        <Header />
        <div className="innerGrid">
            {props.gameReady ? <ControlsContainer/> : <SetupContainer/>}
            {props.gameReady ? <GameContainer/> : null}
        </div>
    </div>
);

App.propTypes = {
    gameReady: PropTypes.bool.isRequired
}

export default App
