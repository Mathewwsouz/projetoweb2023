const Sequelize = require('sequelize');
const database = require('../db');
 
const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model:'pessoa',
            Key:'id'
        }
    },
    email: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(32),
        allowNull: false,
    },
})
 
module.exports = Usuario;