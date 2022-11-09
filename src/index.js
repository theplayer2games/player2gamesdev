import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB8EU-dQHFYQ0RYIfVWlyFMEIvH2zkDTO0",
    authDomain: "player2gamesdev.firebaseapp.com",
    databaseURL: "https://player2gamesdev-default-rtdb.firebaseio.com",
    projectId: "player2gamesdev",
    storageBucket: "player2gamesdev.appspot.com",
    messagingSenderId: "534961120284",
    appId: "1:534961120284:web:141762b09cdcc20f07abd9"
});
const auth = getAuth(firebaseApp);


//detect auth state
onAuthStateChanged(auth, user=>{
    if(user != null){
        console.log('logged in!');
    }
    else{
        console.log('no user');
    }
});

