import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemons, setPokemons, apiUrl }) {
  const [searchInput, setSearchInput] = useState("")

  function onNewPokemonSubmit(newPokemon) {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }) 
      .then(response => response.json())
      .then(newPokemonObject => {
        setPokemons([...pokemons, newPokemonObject])
      })
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemonSubmit={onNewPokemonSubmit} />
      <br />
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <br />
      <PokemonCollection pokemons={pokemons} searchInput={searchInput} />
    </Container>
  );
}

export default PokemonPage;
