import React from "react";
import "./style.css";

function Character(props) {
    return (
        <div className='container'>
            {props.shuffleArray(props.characters).map(item => (
                <div className="card">
                    <img className='card-img-top' alt={item.name} src={item.image} onClick={(event) => props.guessCharacter(item.id, event)} data-guessed={item.guessed} />
                </div>
            ))}
        </div>
    );
}

export default Character;
