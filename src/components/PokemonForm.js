import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onNewPokemonSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })
  
  function handleInputChange(e) {
    const name = e.target.name 
    // console.log(name)
    const value = e.target.value
    // if (name === "hp" & value) return setFormData({ ...formData, [name]: parseInt(value, 10) })
    // if (name === "front" || name === "back") setFormData({ ...formData)
    return setFormData({...formData, [name]: value})
    
  }

  const newPokemonData = {
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl,
    }
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          onNewPokemonSubmit(newPokemonData);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleInputChange} value={formData.name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleInputChange} value={formData.hp} type='number' fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleInputChange}
            value={formData.frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleInputChange}
            value={formData.backUrlback}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
