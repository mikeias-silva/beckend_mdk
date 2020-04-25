const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const config = require('../config/config.js');
/*
sequelize = new Sequelize (
    'MDK', 'root', 'root',
    /*config.database, 
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'mysql'
    });*/

    


    const Dados_mdk = sequelize.define("dados_mdk", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    titulo: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validade: {
            len: [3,100]
        }
    },
    fase: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validade: {
            len: [3,100]
        }
    }
});

module.exports = Dados_mdk;