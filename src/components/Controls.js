import React from "react";
import PropTypes from "prop-types"
import "./Controls.css";
import {randInt} from "../constants";

const Timer = (props) => {
    const {time, active} = props;
    return (
        <div className="controlRow padded">
            <p>timer:</p>
            <p>{time}s</p>
        </div>
    )
}

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.giveUpHandler = this.giveUpHandler.bind(this);
        this.newGameHandler = this.newGameHandler.bind(this);
    }
    giveUpHandler () {
        this.props.stopTimer();
        this.props.loseGame();
    }
    newGameHandler () {
        this.props.resetTimer();
        this.props.newGame();
    }
    render () {
        const {gameStatus, gameStatusMessage, timer} = this.props;
        return (
            <div className="controlsCont leftCont">
                <Timer time={timer.time} active={timer.active}/>
                <div className="controlRow padded">
                    <p name="submit">{gameStatusMessage}</p>
                </div>
                {gameStatus == 0 ?
                    <div className="controlRow">
                        <div className="setupInputCont">
                            <p onClick={this.giveUpHandler} className="submitInput">give up</p>
                        </div>
                    </div>
                :
                    <div className="controlRow">
                        <div className="setupInputCont">
                            <p onClick={this.newGameHandler} className="submitInput">new game</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

Controls.propTypes = {
    gameStatus: PropTypes.number.isRequired,
    gameStatusMessage: PropTypes.string.isRequired,
    newGame: PropTypes.func.isRequired,
    loseGame: PropTypes.func.isRequired,
    timer: PropTypes.shape({
        time: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    }),
    stopTimer: PropTypes.func.isRequired,
    resetTimer: PropTypes.func.isRequired,
}
 
export default Controls;
