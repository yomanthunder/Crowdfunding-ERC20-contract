// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzSRmeZbjskX2oHlu24P4pN8or34vki4E",
  authDomain: "crowdfunding-fad10.firebaseapp.com",
  projectId: "crowdfunding-fad10",
  storageBucket: "crowdfunding-fad10.appspot.com",
  messagingSenderId: "711359215157",
  appId: "1:711359215157:web:e7666e1d1542d6e681a37c",
  databaseUrl: 'https://crowdfunding-fad10-default-rtdb.firebaseio.com'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // why export??
export const imagedb = getStorage(app);