import * as fb from "firebase/app"
import  "firebase/auth"
import  "firebase/firestore"
import  "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCDDbcn26Ft6srREdPPHTRAd9npGCMQet0",
    authDomain: "dresser-41dfe.firebaseapp.com",
    databaseURL: "https://dresser-41dfe.firebaseio.com",
    projectId: "dresser-41dfe",
    storageBucket: "dresser-41dfe.appspot.com",
    messagingSenderId: "963059638806",
    appId: "1:963059638806:web:b7eb1d92be6ae573"
};

const firebase = fb.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export default firebase;