  import firebase from 'firebase';
   require('@firebase/firestore');
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDKMEmttB5RG9bB_Io1q-gbRvtfLAM9R_A",
    authDomain: "wily-app-a3629.firebaseapp.com",
    databaseURL: "https://wily-app-a3629-default-rtdb.firebaseio.com",
    projectId: "wily-app-a3629",
    storageBucket: "wily-app-a3629.appspot.com",
    messagingSenderId: "245625508171",
    appId: "1:245625508171:web:63a0b7f36763d05d7e58ce"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  // export default firebaseConfig
  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } export default firebase.firestore()

 
