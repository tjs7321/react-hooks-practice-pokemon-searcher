import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container, Form } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "test front",
      back: "test back"
    }
  })

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then((pokemon) => setAllPokemon(pokemon))
  },[])

  const searchedPokemon = allPokemon.filter((pokemon) => {
    if (pokemon.name.includes(search)) {return pokemon}})

function handleSubmit(event){
  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  })
  .then(r => r.json())
  .then((postedPokemon) => setAllPokemon([...allPokemon, postedPokemon]))
  event.target.reset()
  }
  

    return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
      handleSubmit={handleSubmit}
      newPokemon={newPokemon}
      setNewPokemon={setNewPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection allPokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
