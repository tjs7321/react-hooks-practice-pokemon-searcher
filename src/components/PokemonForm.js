import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({newPokemon, setNewPokemon, handleSubmit}) {


  function handleChange(e){
    let newKey = e.target.name
    let value = e.target.value

    setNewPokemon((newPokemon) => {
      const updatedPokemon = {...newPokemon}
        if(newKey === "front" || newKey === "back"){
          updatedPokemon.sprites[newKey] = value
        } else (updatedPokemon[newKey] = value)
        return updatedPokemon
      })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
          onChange={handleChange}
          fluid label="Name"
          placeholder="Name"
          name="name" />
          <Form.Input
          onChange={handleChange}
          fluid label="hp"
          placeholder="hp"
          name="hp" />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
