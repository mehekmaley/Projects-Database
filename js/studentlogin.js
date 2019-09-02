var provider = new firebase.auth.GoogleAuthProvider();

function jump() {
  firebase.auth().onAuthStateChanged(function (user){
      if (user) {
          // User is signed in.
      
          console.log("sigin");
          window.location.href = 'studentin.html';
    
      
        } else {
          // No user is signed in.
      
          firebase.auth().signInWithRedirect(provider).then(function(result){
            var token = result.credential.accessToken;
            var user = result.user;
            jump();
            console.log(token)
            console.log(user)
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
          
            console.log(error.code)
            console.log(error.message)
        });
          
        }
  });
}

function login() {
    
    firebase.auth().signInWithRedirect(provider).then(function(result){
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
      jump();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
    
}





window.onload = login;