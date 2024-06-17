const express = require('express')
const router = express.Router()
const path = require("path")

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res)=> {
    console.log('salvando usuário')
               
    console.log(req.body)
    
    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`buscando usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router