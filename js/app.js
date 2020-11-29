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

let regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('Tutors').add({
        first_name : regForm['first-name'].value,
        last_name : regForm['last-name'].value,
        email : regForm['email'].value,
        password : regForm['password'].value,
        phone_number : regForm['phone-number'].value,
        gender: regForm['gender'].value,
        user_type: regForm['user-type'].value
    })

    

    regForm['first-name'].value ='';
    regForm['last-name'].value ='';
    regForm['email'].value ='';
    regForm['password'].value ='';
    regForm['con-password'].value ='';
    regForm['phone-number'].value ='';
    regForm['gender'].value ='';
    regForm['user-type'].value ='';

    let msg = document.querySelector('.msg');
    msg.style.display = 'flex';

    window.setTimeout( () => {
        msg.style.display = 'none';
    }, 3000);

    // if(regForm['user-type'].value === 'tutor'){
    //     window.setTimeout( () => {
    //         location.href='reg-as-tutor.html'
    //     }, 1500);
    // }
    // else {
        
    // }
})
