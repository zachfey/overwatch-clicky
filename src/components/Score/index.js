import React from "react";
import "./style.css";

function Score(props) {
    return (
        <div className = 'container'>
            <h2>Score: {props.score.currentScore}</h2>
            <h2>High Score: {props.score.highScore}</h2>
        </div>
    );
}

export default Score;
