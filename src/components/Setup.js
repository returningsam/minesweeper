import React from "react";
import PropTypes from "prop-types"
import "./Setup.css";

class NumberField extends React.Component {
    render () {
        return (
            <div className="setupInputCont">
                <p className="controlLabel">{this.props.label}:</p>
                <input className="numberInput" onChange={this.props.handleChange} value={this.props.defaultVal} name={this.props.name}
                       type="number" placeholder={this.props.placeholder} min={this.props.min} max={this.props.max}/>
            </div>
        );
    }
}

const Setup = (props) => {
    const {width, height, numMines, updateWidth, updateHeight, updateNumMines, handleSubmit} = props;
    const startingSound = new Audio("starting.mp3");
    return (
        <div className="setupCont leftCont">
            <div className="controlRow padded">
                <NumberField handleChange={updateWidth} label="width" name="width" defaultVal={width} placeholder="x" min="5" max="20"/>
            </div>
            <div className="controlRow padded">
                <NumberField handleChange={updateHeight} label="height" name="height" defaultVal={height} placeholder="y" min="5" max="20"/>
            </div>
            <div className="controlRow padded">
                <NumberField handleChange={updateNumMines} label="number of mines" name="numMines" defaultVal={numMines} placeholder="100" min="1" max={(width*height) - 1}/>
            </div>
            <div className="controlRow">
                <div className="setupInputCont">
                    <p onClick={() => {startingSound.play();handleSubmit()}} className="submitInput"  type="submit" name="submit">start</p>
                </div>
            </div>
        </div>
    );
}

Setup.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    numMines: PropTypes.number.isRequired,
    updateWidth: PropTypes.func.isRequired,
    updateHeight: PropTypes.func.isRequired,
    updateNumMines: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
 
export default Setup;
