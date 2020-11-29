var firebaseConfig = {
  apiKey: "AIzaSyDKOHUJ81kVcijPbBuWBR-rctQAk4UOqsw",
  authDomain: "hackfest2020-3504f.firebaseapp.com",
  databaseURL: "https://hackfest2020-3504f.firebaseio.com",
  projectId: "hackfest2020-3504f",
  storageBucket: "hackfest2020-3504f.appspot.com",
  messagingSenderId: "713492434081",
  appId: "1:713492434081:web:3a7f87354a67493abd34e0",
  measurementId: "G-QLVEVPBD5J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

var data;

db.collection('Tutors').where('user_type', '==', 'tutor').get().then((snapshot) => {
  snapshot.docs.forEach( doc => {
    // console.log(doc.data())

    // fullname.innerHTML = doc.data().first_name + " " + doc.data().last_name;
    // infobio.innerHTML = doc.data().info;
      // console.log(doc.data().first_name)

      data = template({ 
        first_name: doc.data().first_name, 
        last_name: doc.data().last_name, 
        info: doc.data().info, 
      });
      document.querySelector('.renderHere').innerHTML += data;
  })
})

setTimeout( () => {
  

  document.querySelectorAll('.avatar').forEach( i => {
    let number = Math.floor(Math.random()*8);
    console.log(i.src = "../img/" + number + ".png")
  })
}, 1000);


function updateRate() {
  let rate = document.querySelector('#rate').value;
  document.querySelector('.rate-val').value = rate;
}

let info = document.querySelector('.template').innerHTML;
let template = Handlebars.compile(info);