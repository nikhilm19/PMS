function login(){
	var email=document.getElementById("email").value;
	var password=document.getElementById("pass").value;
	console.log(email);
	//alert(email+" " + password);
	
	firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
		 var errorCode = error.code;
		var errorMessage = error.message;
		
		alert(errorMessage);
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location="/home/pc001/Desktop/PMS-master (1)/PMS-master/home.html"
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    //alert(email);
  } 
  else {
    alert("Incorrect Credentials");
  }
});
}
	
