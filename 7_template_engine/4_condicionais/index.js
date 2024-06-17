const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

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

//config assets (CSS, js, etc..)
app.use(express.static('public'))

//Rotas

app.get('/dashboard', (req, res) => {
    const items = ["item a", "item b", "item c"]
    res.render('dashboard', {items})
})

app.get('/blogpost', (req, res) => {
    const post = {
        title: 'Aprendendo Node',
        category: 'JavaScript',
        body: 'Voodoo é pra Jacu',
        comments: ["muito bom", "marromeno", "bela bosta"]
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprendendo Node',
            category: 'JavaScript',
            body: 'Voodoo é pra Jacu',
            comments: 4
        },
        {
            title: 'Aprendendo Python',
            category: 'python',
            body: 'Voodoo é pra Jacu',
            comments: 3
        },
        {
            title: 'Aprendendo PHP',
            category: 'php',
            body: 'Voodoo é pra Jacu',
            comments: 2 
        },
    ]

    res.render('blog', {posts})
})

//rota principal raiz
app.get('/', (req, res)=>{
    const user = {
        name:'Yehyeh',
        surname:'Bimbim'
    }

    const auth = true 
    const approved = true

    res.render('home', { user: user, auth, approved })
})

app.listen(3000, ()=>{
    console.log('App running...')
})
