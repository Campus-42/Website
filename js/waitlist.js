// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAiNCZ_3CDNXynFas4b1UsHI6XdQwT6YcY",
  authDomain: "campus42.firebaseapp.com",
  databaseURL: "https://campus42.firebaseio.com",
  projectId: "campus42",
  storageBucket: "campus42.appspot.com",
  messagingSenderId: "1053546856481",
  appId: "1:1053546856481:web:3ae5dc4bb33914da0ea360",
  measurementId: "G-MPN1NMTLLM"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
// Reference messages collection
var messagesRef = firebase.database().ref('Waitlist');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var studentID = getInputVal('studentID');

  // Save message
  saveMessage(name, studentID);

  // show success field
  try {    
    // Show alert
    document.querySelector('.success-message').style.display = 'block';
  
    // Hide alert after 10 seconds
    setTimeout(function(){
      document.querySelector('.success-message').style.display = 'none';
    },5000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // show fail field
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
    // Show alert
    document.querySelector('.w-form-fail').style.display = 'block';

    // Hide alert after 4 seconds
    setTimeout(function(){
      document.querySelector('.w-form-fail').style.display = 'none';
    },4000);

    // Clear form
    document.getElementById('contactForm').reset();
  }
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, studentID){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    studentID: studentID,

  });
}
      