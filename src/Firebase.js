import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgxc8f48Xw3sPoomNXtXqSI_0bIy_3Crw",
  authDomain: "shoppingcart-c11eb.firebaseapp.com",
  projectId: "shoppingcart-c11eb",
  storageBucket: "shoppingcart-c11eb.appspot.com",
  messagingSenderId: "532416398561",
  appId: "1:532416398561:web:2bd67d4e9a7267c56b23a0",
  measurementId: "G-EG1HRRK6GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();






export {app,db} 