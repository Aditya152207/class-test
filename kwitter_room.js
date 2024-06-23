
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBLyXdOVw3rDNpqc5hC3dCSiembLn2optI",
      authDomain: "class-test-b4991.firebaseapp.com",
      databaseURL: "https://class-test-b4991-default-rtdb.firebaseio.com",
      projectId: "class-test-b4991",
      storageBucket: "class-test-b4991.appspot.com",
      messagingSenderId: "71358972882",
      appId: "1:71358972882:web:94949cc6e3c7770ee83e0b",
      measurementId: "G-VESEK85LWB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!"

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code

      });});}
getData();""
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}