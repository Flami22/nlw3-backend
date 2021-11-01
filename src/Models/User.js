const { Model, DataTypes } = require('sequelize');

class User extends Model {

     static init(sequelize) {
         super.init({

            name: DataTypes.STRING,
      
              email: DataTypes.STRING,
      
              cpf: DataTypes.INTEGER,
      
              password: DataTypes.STRING,
              
              data_nasc: DataTypes.STRING,
      
         }, {
             sequelize
         })
     }

}

module.exports = User;