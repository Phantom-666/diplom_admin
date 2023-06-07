import { Router } from 'express'
import { admin } from '../../firebase'

module.exports = Router().post('/tables', async (req, res) => {
  const db = admin.database()

  const ref = db.ref('tables')
  const snapshot = await ref.once('value')

  const data = snapshot.val()

  res.send({ data })
})
