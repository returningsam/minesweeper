import React from "react";
import PropTypes from "prop-types";
import "./Game.css";
import {MINE_CHAR, FLAG_CHAR} from "../constants";

var timerUpdateInterval = false;

const colorOptions = ["black","blue","green","red","purple","black","maroon","grey","turquoise"];

const getNumberColor = (num) => {
    num = num % colorOptions.length;
    return colorOptions[num];
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectSquare = this.handleSelectSquare.bind(this);
        this.handleFlagSquare = this.handleFlagSquare.bind(this);
    }
    handleSelectSquare (ev) {
        const { gameData, stopTimer, loseGame, selectSquare, startTimer } = this.props;
        if (!timerUpdateInterval) timerUpdateInterval = startTimer();
        var toks = ev.target.id.split("-");
        var x = parseInt(toks[0]);
        var y = parseInt(toks[1]);
        if (!gameData[y][x].hidden || gameData[y][x].flag) return;
        if (gameData[y][x].mine) {
            stopTimer();
            loseGame();
        }
        else selectSquare(x,y);
    }
    handleFlagSquare (ev) {
        const { flagSquare, startTimer } = this.props;
        if (!timerUpdateInterval) timerUpdateInterval = startTimer();
        var toks = ev.target.id.split("-");
        var x = parseInt(toks[0]);
        var y = parseInt(toks[1]);
        flagSquare(x,y);
        ev.preventDefault();
    }
    render () {
        var {gameData, gameReady, gameStatus, timerActive, updateTimer,  stopTimer} = this.props;
        const {handleSelectSquare, handleFlagSquare} = this;

        timerActive = timerActive || (gameStatus == 0);

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
                                    var curColor = (node.mine ? "red" : getNumberColor(node.numNear));
                                    return (
                                        <td onClick={gameStatus == 0 ? handleSelectSquare : null}
                                            onContextMenu={gameStatus == 0 ? handleFlagSquare : null}
                                            style={node.hidden ? null : node.mine ? ((node.hidden || gameStatus == 1) ? null : {backgroundColor:curColor}) : {color:curColor}}
                                            className={(node.hidden) ? ("hidden " + ((gameStatus == 0) ? "hover" : "")) : ""}
                                            id={node.x + "-" + node.y} key={node.x + "-" + node.y}>
                                                {node.hidden ? (node.flag ? FLAG_CHAR : " ") : (node.mine ? ((gameStatus == -1) ? MINE_CHAR: FLAG_CHAR) : ((node.numNear > 0) ? node.numNear : " "))}
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
    gameStatus: PropTypes.number.isRequired,
    selectSquare: PropTypes.func.isRequired,
    flagSquare: PropTypes.func.isRequired,
    loseGame: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    updateTimer: PropTypes.func.isRequired,
    timerActive: PropTypes.bool.isRequired
}
 
export default Game;
