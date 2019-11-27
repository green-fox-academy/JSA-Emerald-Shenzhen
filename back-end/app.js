const express = require('express')
const cors = require('cors')

const app = express()
const { PATHS } = require('./config')

const productsRoutes = require('./routers/productsRoutes')
const loansRoutes = require('./routers/loansRoutes')

const auth = require('./middleware/auth')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.all('*', auth)

app.use(PATHS.products, productsRoutes)
app.use(PATHS.loans, loansRoutes)

app.use((_, res) => {
  res.status(404).send({ error: 'Sorry cant find that!' })
})

module.exports = app
