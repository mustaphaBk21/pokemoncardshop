import React, { useState, useEffect } from 'react'
import axios from "axios"
import PokemonCard from './PokemonCard'

export default function Allpokemons() {
  const [data, setdata] = useState([])
  const [editId, setEditId] = useState(null)
  const [editFields, setEditFields] = useState({
    image: "",
    name: "",
    description: "",
    price: ""
  })

  // Fetching data
  const fetchdata = () => {
    axios.get("http://localhost:5000/pokemons/getAll")
      .then((res) => setdata(res.data))
      .catch((error) => {
        console.log('error in fetching data : ', error)
      })
  }

  

  const handleShow = (pokemon) => {
    setEditId(pokemon.id)
    setEditFields({
      image: pokemon.image,
      name: pokemon.name,
      description: pokemon.description,
      price: pokemon.price
    })
  }

  const handleEditChange = (e) => {
    setEditFields({ ...editFields, [e.target.name]: e.target.value })
  }

  const handleUpdate = (id) => {
    axios.put(`http://localhost:5000/pokemons/update/${id}`, editFields)
      .then(() => {
        fetchdata()
        setEditId(null)
        alert('Pokemon updated')
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const deletepokemon = (id) => {
    axios.delete(`http://localhost:5000/pokemons/delete/${id}`)
      .then(() => {
        fetchdata()
        alert('pokemon deleted')
      })
      .catch((error) => {
        alert('erro', error)
      })
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div className='pokemon-cards-wrapper'>
      {data.map((e) => (
        <div key={e.id} style={{ marginBottom: 24 }}>
          <PokemonCard
            data={e}
            updatepokemon={() => handleShow(e)}
            deletepokemon={() => deletepokemon(e.id)}
          />
          {editId === e.id && (
            <div  className="pokemon-edit-form" style={{ marginTop: 12, background: "#f3f4f6", padding: 16, borderRadius: 8 }}>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={editFields.image}
                onChange={handleEditChange}
                style={{ marginRight: 8 }}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={editFields.name}
                onChange={handleEditChange}
                style={{ marginRight: 8 }}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={editFields.description}
                onChange={handleEditChange}
                style={{ marginRight: 8 }}
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={editFields.price}
                onChange={handleEditChange}
                style={{ marginRight: 8, width: 80 }}
              />
              <button className="button" onClick={() => handleUpdate(e.id)}>Save</button>
              <button className="button" style={{ marginLeft: 8 }} onClick={() => setEditId(null)}>Cancel</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}