require('dotenv').config()
const { init } = require('./services/dbService')
const app = require('./app')

const PORT = process.env.PORT || 3000

init()
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
