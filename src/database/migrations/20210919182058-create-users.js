


'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
return queryInterface.createTable('users', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  cpf: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  data_nasc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE,
    allowNull: false,
},

updatedAt: {
    field: 'updated_at',
    type: Sequelize.DATE,
    allowNull: false,
},
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
