const http = require('http')

const port = 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Contenty-Type', 'text/html')
    response.end('<h1>Ola, este eh meu primeiro server HTML</h1><p>Testando atualizacao</p>')
})

server.listen(port, () => {
    console.log(`Server runs at port: ${port}`)
})