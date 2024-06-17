const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../views')

router.post('/', (request, response) => {
    console.log('post')
    console.log('Autenticando')
    if(request.body.password === 'bimbim'){
        console.log('User authenticated')
        response.sendFile(`${basePath}/index.html`)
    } else {
        console.log('Redirecting to login')
        response.sendFile(`${basePath}/login.html`)
    }
})

module.exports = router