// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLLtTsLmjiuATu--srq-kWCXpX_66c3Eo",
    authDomain: "android-app-admin-panel.firebaseapp.com",
    databaseURL: "https://android-app-admin-panel.firebaseio.com",
    projectId: "android-app-admin-panel",
    storageBucket: "android-app-admin-panel.appspot.com",
    messagingSenderId: "949906327586",
    appId: "1:949906327586:web:b55fd8c30380c8f2cd227b",
    measurementId: "G-VBXHQC1BE9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function login() {
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(txtEmail, txtPassword)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("error: " + errorMessage);
            // ...
        });
    txtEmail.value = "";
    txtPassword.value = "";
}

const btnSignUp = document.getElementById("btnSignUp");
const btnLogOut = document.getElementById("btnLogOut");
btnSignUp.addEventListener("click", (e) => {
    //TODO: Email Validation need to be added
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;

    firebase
        .auth()
        .createUserWithEmailAndPassword(txtEmail, txtPassword)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("error: " + errorMessage);
            // ...
        });
});

btnLogOut.addEventListener("click", (e) => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("userDiv").style.display = "block";
        document.getElementById("loginDiv").style.display = "none";
    } else {
        document.getElementById("userDiv").style.display = "none";
        document.getElementById("loginDiv").style.display = "block";
    }
});
