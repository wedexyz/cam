var firebaseConfig = {

    databaseURL:" https://user-49128.firebaseio.com/",
    
    };
    firebase.initializeApp(firebaseConfig);
    var dbRef = firebase.database();
    var face = document.getElementById('face');
    dbRef.ref("/server").child('face').on('value', snap => face.value= snap.val());