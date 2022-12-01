import admin from 'firebase-admin'
const path = require('path')
const service = path.resolve(__dirname + './../../../firebase.config.json' )

console.log(serviceAccount)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const fireDb = admin.firestore()
