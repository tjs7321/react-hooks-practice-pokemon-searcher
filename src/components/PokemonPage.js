import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then((pokemon) => setAllPokemon(pokemon))
  },[])

  const searchedPokemon = allPokemon.filter((pokemon) => {
    if (pokemon.name.includes(search)) {return pokemon}})

function handleSubmit(){
  console.log("we are in the app!")
  //we call the on submit in the form
  //we take teh input data and set the state based on the input
  //we have access to those values now in the app component
  //in app we set that of the new "all pokemon"
    //1) update teh server
    //2) update the state locally
}
  

    return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection allPokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
