import { Router } from 'express'
import { resolve } from 'path'
import { pagesPath } from '../../config'

module.exports = Router().get('/tables', (req, res) => {
  res.sendFile(resolve(pagesPath, 'tables.html'))
})
