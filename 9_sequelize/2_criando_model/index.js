const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./data/connection')
const app = express()
const User = require('./models/User')

//configurando partials handleBars
const partialsHbs = exphbs.create({
    partialsDir: ['views/partials']
})

/**
 * config sem partials
 * app.engine('handlebars', exphbs.engine())
 */

//config com partials handlebars
app.engine('handlebars', partialsHbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rotas


app.get('/', (req, res) => {
    res.render('home')
})

//realiza a conexão, sincroniza as tabelas e roda o app na porta 3000
conn.sync().then(()=>{
    
    app.listen(3000)

}).catch((err) => console.log(err))

