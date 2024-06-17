const express = require("express")
const path = require("path")

const app = express()
const basePath = path.join(__dirname, 'templates')

const port = 3000 //variável de ambiente

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`App rodando na porta: ${port}`)

})
