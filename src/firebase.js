import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD1SyCfQnyfi07LDvkSbZfXA_EdCFiKn8k",
    authDomain: "svelte-2b211.firebaseapp.com",
    databaseURL: "https://svelte-2b211.firebaseio.com",
    projectId: "svelte-2b211",
    storageBucket: "svelte-2b211.appspot.com",
    messagingSenderId: "802452097554",
    appId: "1:802452097554:web:f9113cef4279083d79e6cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();