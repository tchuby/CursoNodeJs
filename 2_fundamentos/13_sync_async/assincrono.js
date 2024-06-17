const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivoAsync.txt', 'oi async', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado!')
    }, 3000)
})

console.log('Fim')