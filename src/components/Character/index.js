import React from "react";
import "./style.css";

function Character(props) {
    return (

        <div className="card" >
            <div className="card-img-top img-container">
                {props.character.map(item => (
                    <img alt={item.name} src={item.image} onClick={() => props.guessCharacter(item.id)} data-guessed ={item.guessed}/>
                ))}

            </div>
        </div>
    );
}

export default Character;
