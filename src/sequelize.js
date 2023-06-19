const path = require('path')
const { Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','carroceu.sqlite')
})

module.exports = sequelize