//Improved error handling and asynchronous operations

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // Access Firebase Realtime Database after successful authentication
    firebase.database().ref('/').once('value', (snapshot) => {
      const data = snapshot.val();
      console.log('Data:', data);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error:', errorCode, errorMessage);
    // Handle specific error codes or display a user-friendly message
  });