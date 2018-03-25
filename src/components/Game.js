import React from "react";
import PropTypes from "prop-types";
import "./Game.css";

var timerUpdateInterval = false;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectSquare = this.handleSelectSquare.bind(this);
    }
    handleSelectSquare (ev) {
        if (!timerUpdateInterval) timerUpdateInterval = this.props.startTimer();
        var toks = ev.target.id.split("-");
        var x = parseInt(toks[0]);
        var y = parseInt(toks[1]);
        if (this.props.gameData[y][x].mine) {
            this.props.stopTimer();
            this.props.loseGame();
        }
        else this.props.selectSquare(x,y);
    }
    render () {
        const {gameData, gameReady, gameStatus, timerActive, updateTimer} = this.props;
        const handleSelectSquare = this.handleSelectSquare;
        if (timerActive && !timerUpdateInterval) {
            console.log("started");
            timerUpdateInterval = setInterval(updateTimer, 100);
        }
        else if (!timerActive && timerUpdateInterval) {
            clearInterval(timerUpdateInterval);
            timerUpdateInterval = false;
        }
        return (
            <div className={"gameCont card " + (gameReady ? "front" : "back")}>
                <table style={{
                        minHeight: (gameData.length * 25) + "px", maxHeight: (gameData.length * 25) + "px",
                        minWidth: (gameData[0].length * 25) + "px", maxWidth: (gameData[0].length * 25) + "px"
                    }}><tbody>
                    {gameData.map((row, rowNum) => {
                        return (
                            <tr key={rowNum}>
                                {row.map((node) => {
                                    return (
                                        <td onClick={gameStatus ? handleSelectSquare : null} className={(node.hidden) ? ("hidden " + (gameStatus ? "hover" : "")) : ""} id={node.x + "-" + node.y} key={node.x + "-" + node.y}>
                                            {node.hidden ? (node.flag ? "⚐" : " ") : (node.mine ? "⦻" : node.numNear)}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody></table>
            </div>
        );
    }
}

Game.propTypes = {
    gameData: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired,
                mine: PropTypes.bool.isRequired,
                numNear: PropTypes.number.isRequired
            }).isRequired
        )
    ),
    gameReady: PropTypes.bool.isRequired,
    gameStatus: PropTypes.bool.isRequired,
    selectSquare: PropTypes.func.isRequired,
    loseGame: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    updateTimer: PropTypes.func.isRequired,
    timerActive: PropTypes.bool.isRequired
}
 
export default Game;
