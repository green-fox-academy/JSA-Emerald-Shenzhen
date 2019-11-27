const express = require('express')
const cors = require('cors')

const app = express()
const { PATHS } = require('./config')

const productsRoutes = require('./routers/productsRoutes')
const loansRoutes = require('./routers/loansRoutes')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use(PATHS.products, productsRoutes)
app.use(PATHS.loans, loansRoutes)

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!')
})

module.exports = app
