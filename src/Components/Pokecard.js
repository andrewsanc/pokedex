import React from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${padToThree(id)}.png`;

  return (
    <div className='Pokecard'>
      <h1 className='Pokecard-title'>{name}</h1>
      <div className='Pokecard-image'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='Pokecard-data'>Type: {type}</div>
      <div className='Pokecard-data'>EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
