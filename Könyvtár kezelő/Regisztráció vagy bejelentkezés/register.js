 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCMdPZ3aknucNbsrxpqxTrkSAmfH-j82SM",
   authDomain: "szem-c52d3.firebaseapp.com",
   projectId: "szem-c52d3",
   storageBucket: "szem-c52d3.appspot.com",
   messagingSenderId: "411819567266",
   appId: "1:411819567266:web:09c5850698e7d71c4e8ffb",
   measurementId: "G-QK6T8W36MJ"
 };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            // Sikeres regisztráció
            var user = userCredential.user;
            console.log('Regisztráció sikeres', user);
        })
        .catch(function (error) {
            // Hiba történt
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Regisztrációs hiba:", errorCode,
                errorMessage);
        });
})