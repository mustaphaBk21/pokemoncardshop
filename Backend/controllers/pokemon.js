const db = require('../config/db')
const Pokemon = db.pokemon

module.exports = {
    getAllPokemons : (req, res)=>{
        Pokemon.findAll()
        .then((pokemons)=>{
            res.send(pokemons)
        })
        .catch((error)=>{
            res.status(500).json({error : "can't fetch pokemons" , details : error.message})
        })
    },
    getOnepokemon : (req,res)=>{
        const id = req.params.id
        Pokemon.findOne({where :{id :id}})
        .then((pokemon)=>{
            if(pokemon){
                res.json(pokemon)
            }
            else{
                res.status(404).json({error : "pokemon not found !" , details : error.message})
            }
        })
        .catch((error)=>{
            res.status(500).json({error: "error in fetching pokemon" , details : error.message})
        })
    },  
    addPokemon : (req,res)=>{
    Pokemon.create({
        name : req.body.name ,
        image : req.body.image ,
        description : req.body.description
    })
    .then((pokemon)=>{
       res.status(201).json(pokemon)     
    })
    .catch((error)=>{
        res.status(500).json({error : "can't add a pokemon"  , details : error.message })
    })
    },
    updatePokemon : (req,res)=>{
        const id = req.params.id
        Pokemon.update({ 
            name :req.body.name , 
            image : req.body.image,
            description : req.body.description
        },{where :{id:id}})
        .then(([updated])=>{
            if(updated>0){
                res.json({message : 'pokemon updated successfully !'})
            }else{
                res.status(404).json({message: "pokemon not found "})
            }
        })
        .catch((error)=>{
            res.status(500).json({erro : "can't update pokemon" , details : error.message})
        })
    },
    deletePokemon : (req,res)=>{
        const id = req.params.id
        Pokemon.destroy({where : {id:id}})
        .then((deleted)=>{
            if(deleted){
                res.json({message : "pokemon delted successfully !"})
            }else {
                res.status(404).json({message : "pokemon not found"})
            }
        })
        .catch((error)=>{
            res.status(500).json({message : "failed to delete pokemon" , details : error.message})
        })
    }
}