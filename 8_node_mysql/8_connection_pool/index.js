const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./data/connection')
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

app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rotas
app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages

    const script = `INSERT INTO book (title, pages) VALUES ('${title}','${pages}')`

    pool.query(script, function (err){
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const script = `SELECT * FROM book WHERE id = ${id}`

    pool.query(script, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('editbook', { book })
    })

})

app.post('/books/updatebook', (req,res) => {
    const id = req.body.id
    const title = req.body.title
    const pages = req.body.pages

    const script = `UPDATE book SET title = '${title}', pages = ${pages} WHERE id = ${id}`

    pool.query(script, function (err){
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const script = `DELETE FROM book WHERE id = ${id}`
    
    pool.query(script, function (err){
        if (err) {
            console.log(err)
        }

        res.redirect('/books')
    })
})

app.get('/insertbook', (req, res) => {
    res.render('insertbook')
})

app.get('/books', (req, res) => {
    const script = `SELECT * FROM book`

    pool.query(script, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const books = data

        res.render('books', { books })
    })

})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const script = `SELECT * FROM book WHERE id = ${id}`

    pool.query(script, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('book', { book })
    })
})

app.get('/', (req, res) => {
    res.render('home')
})



app.listen(3000)
