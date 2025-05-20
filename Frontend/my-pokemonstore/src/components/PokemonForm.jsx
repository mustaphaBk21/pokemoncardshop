import React , {useState , useEffect} from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'

export default function PokemonForm() {
    const [image , setimage]=useState("")
    const [name , setname]=useState("")
    const [description , setdescription]=useState("")
    const [price , setprice]=useState("")
    const [success , setSuccess] = useState(false)
    const newpokemon = {    
        image : image ,
        name : name , 
        description : description ,
        price : price
    }
    const addpokemon = ()=>{
        axios.post('http://localhost:5000/pokemons/add',newpokemon)
        .then(()=>{
            setSuccess(true)
            setimage("")
            setname("")
            setdescription("")
            setprice("")
            setTimeout(()=> setSuccess(false),2000)
        })
        .catch((error)=>{
            console.log('error',error)
        })
    }
  return (
    <div className='pokemon-form-container'>
        <form onSubmit={addpokemon}>
        <input type="text" placeholder='image Url' value={image} onChange={(e)=>{setimage(e.target.value)}} required />
        <input type="text" placeholder='Name' value = {name} onChange={(e)=>setname(e.target.value)} required />
        <input type="text"  placeholder='Description' value = {description} onChange={(e)=>setdescription(e.target.value)} required />
        <input type="number"  placeholder='price' value={price} onChange={(e)=>setprice(e.target.value)}  required/>
        <button type='submit'> Add Pokemon</button>
        </form>
        {success && <P style = {{color:'green'}} >Pokemon added !</P>}
        <div style={{marginTop : 16}} >
            <h4> Preview </h4>
            <PokemonCard  data = {newpokemon} />
        </div>
    </div>
   
  )
}
