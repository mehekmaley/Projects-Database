
firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    if (user.uid == "xk5hs4AEiLNAxIrfj89PfmnNJp43") {
      // User is signed in.
  
        window.location.href = 'adminin.html';
  
    } else {
      // No user is signed in.
  
     
      document.getElementById("login_div").style.display = "block";
  
    }
  }
  else{
    document.getElementById("login_div").style.display = "block";
  }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  