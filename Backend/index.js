const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require('cors')
const port = 5000
const pokmeonroutes= require('./routes/pokemon')



// 
app.use(cors())
app.use(express.json())
app.use('/pokemons' , pokmeonroutes)


// 
app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(port ,()=>{
    console.log(`server is runnig on port ${port}`)
})