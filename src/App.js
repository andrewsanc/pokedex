import React from "react";
import Pokecard from "./Components/Pokecard";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Pokecard id={4} name='Charmander' type='fire' exp={62} />
    </div>
  );
};

export default App;
