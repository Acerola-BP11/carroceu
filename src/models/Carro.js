const { DataTypes } = require("sequelize")
const sequelize = require('../sequelize')

const Carro = sequelize.define('Carro', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo:{
        type: DataTypes.STRING(120),
        allowNull:false
    },
    marca:{
        type: DataTypes.STRING(120),
        allowNull: false
    },
    valor:{
        type: DataTypes.DOUBLE.UNSIGNED,
        allowNull: false
    }
})

Carro.sync()

module.exports = Carro