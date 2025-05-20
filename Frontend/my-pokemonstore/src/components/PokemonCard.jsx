import React from 'react'
import '../App.css'


export default function PokemonCard({data , onBuy , updatepokemon , deletepokemon}) {
  return (
    <div className='pokemon-card'>
      <img src={data.image} alt="image" />
      <div className='card-content'>
        <h2 className='pokemon-name'>  {data.name} </h2>
        <p className='pokemon-description' >  {data.description}  </p>
        <p className='pokemon-price'> {data.price} $ </p>
        <button className='button' onClick={()=>updatepokemon()} > update </button>
        <button className='button'  onClick={()=>deletepokemon()}> delete </button>
      </div> 
    </div>
  )
}
