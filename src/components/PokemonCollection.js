import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

//we have the pokemon data in all pokemon
//when we hard code <PokemonCard/> we pass no props
//we get an empty pokemon card
//we can iterate through all pokemon and have the return value 


function PokemonCollection({allPokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      {allPokemon.map((pokemon) => {
        return(
        <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        hp={pokemon.hp}
        sprites={pokemon.sprites}
        />)
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
