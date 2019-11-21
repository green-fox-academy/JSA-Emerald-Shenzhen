require('dotenv').config()
const { init, selectByUserId } = require('./services/dbService')
const app = require('./app')

const PORT = process.env.PORT || 3000

init()

selectByUserId()
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${PORT}`)
})
