import React, { useState } from "react";
import Pokedex from "./Pokedex";

const defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

const Pokegame = () => {
  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([...defaultProps.pokemon]);

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  const calculateExp = (hand) => {
    const reducer = (rollingTotExp, pokeObj) =>
      rollingTotExp + pokeObj.base_experience;
    return hand.reduce(reducer, 0);
  };

  return (
    <div>
      <Pokedex
        pokemon={hand1}
        totalExp={calculateExp(hand1)}
        isWinner={calculateExp(hand1) > calculateExp(hand2)}
      />
      <Pokedex
        pokemon={hand2}
        totalExp={calculateExp(hand2)}
        isWinner={calculateExp(hand2) > calculateExp(hand1)}
      />
    </div>
  );
};

export default Pokegame;
