const express = require('express')
const router = express.Router()

const {getAllPokemons , getOnepokemon , addPokemon , updatePokemon , deletePokemon} = require('../controllers/pokemon')

router.get('/getAll' , getAllPokemons)
router.get('/getOne/:id' , getOnepokemon)
router.post('/add' , addPokemon)
router.put('/update/:id' , updatePokemon)
router.delete('/delete/:id' , deletePokemon)


module.exports = router