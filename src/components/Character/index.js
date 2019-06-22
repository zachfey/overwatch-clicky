import React from "react";
import "./style.css";

function Character(props) {
    console.log(props)
    return (

        <div className="card">
            <div className="card-img-top img-container">
                {props.character.map(item => (
                    <img alt={item.name} src={item.image} />
                ))}
                {/* onClick={() => props.guessCharacter(props.id)} */}

            </div>
        </div>
    );
}

export default Character;
