import React from "react";
import PropTypes from "prop-types";
import "./Game.css";

const Game = (gameData, gameReady) => (
    <div className={"gameCont card " + (gameReady ? "front" : "back")}>
        {JSON.stringify(gameData)}
    </div>
);

Game.propTypes = {
    gameData: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    ),
    gameReady: PropTypes.bool.isRequired
}
 
export default Game;
