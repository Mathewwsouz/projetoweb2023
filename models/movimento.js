const Sequelize = require('sequelize');
const database = require('../db');
 
const movimento = database.define('movimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contaCorrente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model:'contaCorrente',
            Key:'id'
        }
    },
    tipo : {
        type: Sequelize.CHAR(1),
        allowNull: false,
    },
    data_movimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    contaCorrente_origem: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    contaCorrente_destino: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    observacao: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
})
 
module.exports = movimento;