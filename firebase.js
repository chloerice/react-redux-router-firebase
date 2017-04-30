const firebase = require('firebase')
// inside the firebase console, create a new project
// then you'll be able to copy your config object by simply clicking the
// "Add Firebase to your web app" button on the Overview screen at
// https://console.firebase.google.com/project/YOUR_PROJECT_ID/overview
const config = {
  apiKey: 'YOUR_API_KEY_HERE',
  authDomain: 'YOUR_AUTH_DOMAIN_HERE',
  databaseURL: 'YOUR_DB_URL_HERE',
  projectId: 'YOUR_PROJECT_ID_HERE',
  storageBucket: 'YOUR_STORAGE_BUCKET_HERE'
}

firebase.initializeApp(config)
