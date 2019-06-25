import React from "react";
import "./style.css";

function Character(props) {
    return (

        <div className="card" >
            <div className="card-img-top img-container">

                {props.shuffleArray(props.characters).map(item => (
                    <img alt={item.name} src={item.image} onClick={(event) => props.guessCharacter(item.id, event)} data-guessed ={item.guessed}/>
                ))}

            </div>
        </div>
    );
}

export default Character;
