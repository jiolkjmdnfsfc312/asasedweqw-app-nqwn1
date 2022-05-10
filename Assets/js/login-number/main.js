// Your web app's Firebase configuration ENTER YOUR FIREBASE DETAILS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCSdoYwAd5IHNPXO1a5OCSiYWpORLUzyPI",
  authDomain: "fungamesid.firebaseapp.com",
  databaseURL: "https://fungamesid-default-rtdb.firebaseio.com",
  projectId: "fungamesid",
  storageBucket: "fungamesid.appspot.com",
  messagingSenderId: "288362351127",
  appId: "1:288362351127:web:1def18b6d7e9695d982a52",
  measurementId: "G-HGSY5WTSGZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var form = document.querySelector('#loginForm');
var otp_form = document.querySelector('#otpForm');
var message = document.querySelector('#messageDiv');
var sign_out = document.querySelector("#signOut");
var message_value = document.querySelector('.message');

// check if user is logged in or not
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if(window.location.pathname != '../../index.html'){
            window.location = '../../index.html';
        }
    } else {
        if(window.location.pathname === '../../index.html'){
            window.location = 'index.html';
        }
    }
});

if(window.location.pathname != '../../index.html'){
    // verification captcha setting 
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            console.log('captcha verified');
            window.location.href = 'http://www.google.com';
        }
    });
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().settings.appVerificationDisabledForTesting = true; // turn this off in production stage

    // user login
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let phone_number = form.phone.value;
        
            // setup invisible recaptcha 
            firebase.auth().signInWithPhoneNumber(phone_number, appVerifier)
            .then((confirmationResult) => {
                console.log("OTP SEND", confirmationResult);
                form.style.display = 'none';
                otp_form.style.display = 'block';
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                showErrorMessage(error.message);
            });
            
        })
    }

    // verify otp 
    if(otp_form){
        otp_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let otp_number = otp_form.otp_value.value;
            confirmationResult.confirm(otp_number).then((result) => {
                // User signed in successfully.
                const user = result.user;
                window.location = '../../index.html';
            }).catch((error) => {
                showErrorMessage(error.message);
            });
        })
    }

}


// show error message function 
function showErrorMessage(erro_message){
    message.style.display = 'block';
    message_value.innerText = erro_message;
    console.log(erro_message);
    setTimeout(function(){
        message.style.display = 'none';
    }, 3000);
}

// sign out  
if(sign_out){
    sign_out.addEventListener('click', function(e) {
        firebase.auth().signOut().then(() => {
            window.location = 'index.html';
        }).catch((error) => {
        // An error happened.
        });
    })
}

window.addEventListener("online",function(){
    document.body.innerText = "ONLINE <KELUAR APLIKASI UNTUK MEMULAI ULANG>";
});
    window.addEventListener("offline",function(){
     document.body.innerText = "you are offline";
});