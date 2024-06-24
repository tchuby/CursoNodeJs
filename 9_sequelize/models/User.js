const { DataTypes } = require('sequelize')

const db = require('../data/connection')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
    birthday: {
        type: DataTypes.DATE,
    }
})

module.exports = User