import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemon, totalExp, isWinner }) => {
  const renderPokemonCards = pokemon.map((pokeObj) => {
    return (
      <Pokecard
        key={pokeObj.id}
        id={pokeObj.id}
        name={pokeObj.name}
        type={pokeObj.type}
        exp={pokeObj.base_experience}
      />
    );
  });

  let title;
  if (isWinner) {
    title = <h1 className='Pokedex-winner'>Winning Hand</h1>;
  } else {
    title = <h1 className='Pokedex-loser'>Losing Hand</h1>;
  }

  return (
    <div className='Pokedex'>
      {title}
      <h4>Total Exp: {totalExp}</h4>
      <div className='Pokedex-cards'>{renderPokemonCards}</div>
    </div>
  );
};

export default Pokedex;
