const express = require("express")
const path = require("path")

const port = 3000 //variável de ambiente
const app = express()
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`buscando usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`App rodando na porta: ${port}`)

})
