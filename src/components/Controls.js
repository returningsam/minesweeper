import React from "react";
import PropTypes from "prop-types"
import "./Controls.css";

const Timer = (props) => {
    const {time, active} = props;
    return (
        <div className="controlRow padded">
            <p>timer:</p>
            <p>{active ? (time) : 0}</p>
        </div>
    )
}

const Controls = (props) => {
    const {gameEnd, timer} = props;
    return (
        <div className="controlsCont leftCont">
            <Timer time={timer.time} active={timer.active}/>
            <div className="controlRow">
                <div className="setupInputCont">
                    <input onClick={gameEnd} className="submitInput" value="give up" type="submit" name="submit"/>
                </div>
            </div>
        </div>
    );
}

Controls.propTypes = {
    gameEnd: PropTypes.func.isRequired,
    timer: PropTypes.shape({
        time: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired
    })
}
 
export default Controls;
