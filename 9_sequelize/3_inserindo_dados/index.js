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

//ler post
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rotas

app.post('/users/create', async (req, res) => {

    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    } else {
        newsletter = false
    }

    await User.create({name, occupation, newsletter})

    res.redirect('/')

})

app.get('/users/create', (req, res)=> {
    res.render('add_user')
})

app.get('/users', async (req, res) => {
    const users  = await User.findAll({raw: true})


    res.render('users', {users: users})
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({raw: true, where: { id: id }})

    res.render('user', { user })
})

app.get('/', (req, res) => {
    res.render('home')
})

//realiza a conexão, sincroniza as tabelas e roda o app na porta 3000
conn.sync().then(()=>{
    
    app.listen(3000)

}).catch((err) => console.log(err))

