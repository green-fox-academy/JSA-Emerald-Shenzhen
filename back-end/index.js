require('dotenv').config()
const dbService = require('./services/dbService')
const app = require('./app')

const PORT = process.env.PORT || 3000

dbService.init()

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${PORT}`)
})
