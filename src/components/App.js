import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

const API_URL = "http://localhost:3001/pokemon"

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(pokemonsObject => {
        setPokemons(pokemonsObject)
      })
  }, [])

  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} setPokemons={setPokemons} apiUrl={API_URL} />
    </div>
  );
}

export default App;
