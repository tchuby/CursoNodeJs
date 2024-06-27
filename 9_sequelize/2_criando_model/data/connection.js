const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

try{

    sequelize.authenticate()
    console.log('Conexão com base de dados realizada')

} catch(err) {
    console.log('Base não conectada: ', err)
}

module.exports = sequelize
