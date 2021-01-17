import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, searchInput }) {
  console.log(pokemons)
  
  const filteredSearchProducts = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
    })
  
  const pokemonCards = filteredSearchProducts.map(pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
