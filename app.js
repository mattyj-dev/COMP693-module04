import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
// import {} from './db/connect.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()
//app.set('view engine', 'ejs') //register view engine

app.use(express.static('public'))
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(bodyParser.json())
app.use('/', routes)

// app.get('/', (req, res) => res.render('index', { title: 'Home' }))
// app.get('/add', (req, res) => res.render('add', { title: 'Add an employee' }))
// app.use((req, res) => res.status(404).render('404', { title: '4 oh 4!' }))

const PORT = process.env.PORT || 5000
// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

const init = async () => {
    try {
       await connectDB(process.env.DB) 
       console.log('Connected to database....')
       app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

init()