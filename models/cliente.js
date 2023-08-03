const { sequelize } = require('../database/connection');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define('clientes', {
    clientID: {
        type: DataTypes.STRING
    },
    clientSECRET: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
});


module.exports = Cliente;
