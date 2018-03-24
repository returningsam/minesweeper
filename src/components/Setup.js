import React from "react";
import "./Setup.css";

const Setup = (gameReady, updateWidth , updateHeight , updateNumMines) => (
    <div className="setupCont controlsCont">
        <div className="controlRow">
            <p className="controlLabel">width:</p>
            <input name="width" onChange={updateWidth} placeholder="x" type="number" min="1" max="10"/>
        </div>
        <div className="controlRow">
            <p className="controlLabel">height:</p>
            <input name="height" onChange={updateHeight} placeholder="y" type="number" min="1" max="10"/>
        </div>
        <div className="controlRow">
            <p className="controlLabel">number of mines: </p>
            <input name="numMines" onChange={updateNumMines} placeholder="&#9187;" type="number" min="1" max="10"/>
        </div>
    </div>
);
 
export default Setup;
