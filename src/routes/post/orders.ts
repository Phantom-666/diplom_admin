import { Router } from 'express'
import { admin } from '../../firebase'

module.exports = Router().post('/orders', async (req, res) => {
  const db = admin.database()

  const { path } = req.body

  const ref = db.ref(path)
  const snapshot = await ref.once('value')

  const data = snapshot.val()

  res.send({ data })
})
