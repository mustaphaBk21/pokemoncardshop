import React , {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'

export default function Search() {
const [searchitem , setsearchitem] = useState("")
const [pokemons , setPokemons] = useState([])
const [filtred , setfiltred] = useState([])

useEffect(()=>{
  axios.get('http://localhost:5000/pokemons/getAll')
  .then((res)=>{
    setPokemons(res.data)
  })
  .catch(()=>{
    setPokemons([])
  })
},[])

useEffect(()=>{
  if(searchitem.trim()===""){
    setfiltred([])
  }else{
    setfiltred(
      pokemons.filter(p=>p.name.toLowerCase().includes(searchitem.toLowerCase()))
    )
  }
},[searchitem , pokemons])

const handlechange = (e)=>{
  setsearchitem(e.target.value)
}
  return (
    <div>
      <div className="search-bar-container">
        <input className="search-input" placeholder="Search Pokémon..."  value = {searchitem} onChange={handlechange }/>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginTop: 24 }} >
    {
      filtred.map(p=>(
        <PokemonCard  key={p.id}  data={p} />
      ))
    }
    </div>
    </div>
  )
}
  





