const express = require('express')
const cors = require('cors')

const app = express()
const { PATHS } = require('./config')

const productsRoutes = require('./routers/productsRoutes')
const loansRoutes = require('./routers/loansRoutes')

const connectToDB = require('./db/connectToDB')
// connect to database
connectToDB.connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use(PATHS.products, productsRoutes)
app.use(PATHS.loans, loansRoutes)

app.get('*', (req, res) => res.send('Page Not found 404'))

module.exports = app
