

module.exports = (sequelize , DataTypes)=>{
    const Pokemon = sequelize.define('pokemons' , {
        id : {
            type : DataTypes.INTEGER ,
            allowNull : false ,
            autoIncrement : true ,
            primaryKey : true
        } ,
        name : {
            type : DataTypes.STRING ,
            allowNull : false
        } ,
        image : {
            type:DataTypes.STRING,
            allowNull  : false
        } ,
        description : {
            type : DataTypes.STRING,
            allowNull : false
        },
        price : {
            type : DataTypes.INTEGER ,
            allowNull : false
        }
    })
    return Pokemon
}