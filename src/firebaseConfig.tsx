import firebase from 'firebase';
import {toast} from './toast';

const firebaseConfig = {
    apiKey: "AIzaSyDqgB2-EJsVOZDIoLxglQrrNVtTRa78zZg",
    authDomain: "ion-com85.firebaseapp.com",
    projectId: "ion-com85",
    storageBucket: "ion-com85.appspot.com",
    messagingSenderId: "41589557729",
    appId: "1:41589557729:web:785171dcd8b2bf1152eaa0",
    measurementId: "G-Q0J8DXL966"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export async function loginUser(email: string, password: string) {
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,password);
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        toast(error.massage, 4000)
        return false
    }
  }

  export async function registerUser(email: string, password: string) {
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password);
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        toast(error.massage, 4000)
        return false
    }
  }