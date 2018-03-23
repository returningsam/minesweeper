import React from "react";
import PropTypes from "prop-types"
import SetupContainer from "../containers/SetupContainer";
import GameContainer from "../containers/GameContainer";
import Header from "./Header";

const App = (state) => (
    <div>
        <Header />
        {state.gameReady ? <GameContainer/> : <SetupContainer/>}
    </div>
);

App.propTypes = {
    gameReady: PropTypes.bool.isRequired
}

export default App