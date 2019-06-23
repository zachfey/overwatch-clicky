import React from "react";
import "./style.css";

function Score(props) {
    return (
        <div>
            <p>Score: {props.score.currentScore}</p>
            <p >High Score: {props.score.highScore}</p>
        </div>
    );
}

export default Score;
