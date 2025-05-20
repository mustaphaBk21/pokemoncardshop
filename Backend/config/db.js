const {Sequelize , DataTypes} = require('sequelize')


const sequelize = new Sequelize('pokemon' , 'root' , 'root' , {
    host : 'localhost' ,
    dialect : 'mysql'
})


const db = {}

db.sequelize = sequelize
db.pokemon = require('../models/pokemon') (sequelize , DataTypes)



sequelize.authenticate()
.then(()=>{
     console.log("✅ Connected to database successfully")
})
.catch((error)=>{
    console.log("❌ Unable to connect to the database:" , error)
})

// sequelize.sync({force : true})
// .then(()=>{
//   console.log("  the table for the products model was just created !")
// })
// .catch((error)=>{
//     console.log(error)
// })

module.exports = db