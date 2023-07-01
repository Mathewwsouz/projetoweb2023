const Sequelize = require('sequelize');
const database = require('../db');
 
const contaCorrente = database.define('contaCorrente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            Key:'id'
        } 
    },
    numeroConta: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    nome: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    data_abertura: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    saldo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
})
 
module.exports = contaCorrente;