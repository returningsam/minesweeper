import React from "react";
import PropTypes from "prop-types"

const Game = (gameData) => (
    <div>
        {JSON.stringify(gameData)}
    </div>
);

Game.propTypes = {
    gameData: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    ).isRequired
}
 
export default Game;
