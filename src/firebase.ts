import admin from 'firebase-admin'
import { rootPath } from './config'
import { resolve } from 'path'

var serviceAccount = require(resolve(rootPath, 'cred.json'))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

  databaseURL: 'https://diplom-c6cdb-default-rtdb.firebaseio.com',
})

export { admin }
