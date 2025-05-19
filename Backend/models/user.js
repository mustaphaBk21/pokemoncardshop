

module.exports = (sequelize , DataTypes)=>{
    const User = sequelize.define('users' , {
        id:{
            type:DataTypes.INTEGER,
            allowNull : false ,
            autoIncrment : true ,
            primaryKey : true
        } ,
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
    return User
}