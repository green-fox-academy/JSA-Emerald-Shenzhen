require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
console.log('ffg')

app.get('/', (req, res) => {
  res.end('setup')
})

app.get('*', (req, res) => res.send('Page Not found 404'))

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
