const express = require('express')
const port = 5000
const path = require('path')
const basePath = path.join(__dirname, 'views')
const app = express()
const login = require('./login')
//ler body da requisição
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
//adicionar css e outras coisas do public
app.use(express.static('public'))
//adicionando as rotas de login
app.use('/login', login)

app.get('/', (request, response) => {
    console.log('Autenticando')
    response.sendFile(`${basePath}/login.html`)
})

app.use(function(request, response, next){
    response.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App runing at port: ${port}`)
})
