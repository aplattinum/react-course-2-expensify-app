import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: "1:818535335389:web:9f163e286a6fed63192234",
    // measurementId: "G-2WJ8YWG004"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }; 








// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log()
// })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       }) 
//     })
//     console.log(expenses)
//   }
// )


// database.ref('expenses').push({
//   description: "rent",
//   note: "January",
//   amount: 700
// })






// database.ref('notes').push({
//   title: "Course Topics",
//   body: "react natice , python"
// })

//Setting up subscription allows us to watch changes in database
// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// })



// //setup data subsciption 
// //Andrew is a software developer at Amazon
// database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val()
//     const name = val.name
//     const title = val.job.title
//     const company = val.job.company
//     console.log(`${name} is a ${title} at ${company} `)
//   })

// database.ref('job/title').set('Boss')


// database.ref().set({
//       name: "Andrew Platt",
//       age: 30,
//       stresssLevel: 6,
//       job: {
//         title: 'software developer',
//         company: 'google'
//       },
//       isSingle: true,
//       location: {
//           city: 'Cartagena',
//           country: 'Colombia'
//       }
//   }).then(() => {
//     console.log("Data is ")
//   }).catch((e) => {
//     console.log("This failed", e)
//   })

  

// database.ref().update({
//   stresssLevel: 9,
//   'job/company': 'Amazon',
//   location: {
//     city: 'Seattle',
//     country: 'usa'
//   }

// })


// database.ref()
//     .remove()
//     .then(() => {
//       console.log("data removed")
//     })
//     .catch((e) => {
//       console.log("data removed failed", e)
//     })

