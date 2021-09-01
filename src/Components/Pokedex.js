import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemon, totalExp, isWinner }) => {
  const renderPokemonCards = pokemon.map((pokeObj) => {
    return (
      <Pokecard
        id={pokeObj.id}
        name={pokeObj.name}
        type={pokeObj.type}
        exp={pokeObj.base_experience}
      />
    );
  });

  return (
    <div className='Pokedex'>
      <h1>Pokedex!</h1>
      <p>Total Exp: {totalExp}</p>
      <p>{isWinner ? "WINNER" : "LOSER"}</p>
      <div className='Pokedex-cards'>{renderPokemonCards}</div>
    </div>
  );
};

export default Pokedex;
