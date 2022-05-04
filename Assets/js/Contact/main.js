// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCPoCjiB2Bef5esFN9pjZXzxhSMqY2yZ0Q",
  authDomain: "fungames-contact.firebaseapp.com",
  databaseURL: "https://fungames-contact-default-rtdb.firebaseio.com",
  projectId: "fungames-contact",
  storageBucket: "fungames-contact.appspot.com",
  messagingSenderId: "578042051393",
  appId: "1:578042051393:web:121c0bb521ec2630697fc0",
  measurementId: "G-F2XSJ6JSNB"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Contact FunGames');
  
  function reset() {
    document.getElementById("contactForm").reset();
  }
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var option = getInputVal('option');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, option, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, option, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      option: option,
      message: message,
    });
  }