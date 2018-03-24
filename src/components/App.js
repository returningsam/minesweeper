import React from "react";
import PropTypes from "prop-types"
import SetupContainer from "../containers/SetupContainer";
import GameContainer from "../containers/GameContainer";
import Header from "./Header";
// {state.gameReady ? <ControlsContainer/> : <SetupContainer/>}
const App = (props) => (
    <div className="grid">
        <Header />
        <div className="innerGrid">
            {props.gameReady ? "ready" : <SetupContainer/>}
            <GameContainer/>
        </div>
    </div>
);

App.propTypes = {
    gameReady: PropTypes.bool.isRequired
}

export default App
