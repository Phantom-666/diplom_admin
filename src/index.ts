import express from 'express'
import { PORT } from './config'

const run = () => {
  const app = express()

  app.use(express.json())

  app.use('/', require('./routes/get/index'), require('./routes/get/tables'))
  app.use('/', require('./routes/post/tables'), require('./routes/post/orders'))

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

run()
