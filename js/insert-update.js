db.collection('Tutors').get().then((snapshot) => {
    snapshot.docs.forEach( doc => {
        let id = doc.id;
        let fname = doc.data().first_name;
        let lname = doc.data().last_name;

        let updateTutors = db.collection('Tutors').doc(id);

        updateTutors.update({
            info: "Hi, my name is " + fname + " " + lname + " and I have a passion for working with others and helping them strive for greatness. "
        })

        
    })
})

