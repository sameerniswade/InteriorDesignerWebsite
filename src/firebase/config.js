 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyCPHdwUSDnmqTNGoU8M9M_r0BV1vaccPoY",
    authDomain: "casadeco-98cdc.firebaseapp.com",
    databaseURL: "https://casadeco-98cdc.firebaseio.com",
    projectId: "casadeco-98cdc",
    storageBucket: "casadeco-98cdc.appspot.com",
    messagingSenderId: "19999312829",
    appId: "1:19999312829:web:dee5aebba54ff1de5ea0d4"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  const projectStorageRef = projectStorage.ref();
  
  export {projectStorage, projectFirestore, projectStorageRef}; 

