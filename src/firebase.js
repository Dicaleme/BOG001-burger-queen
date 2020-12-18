//https://console.firebase.google.com/u/0/project/burguerqueen-24-7/settings/general/web:ZGIzNmUzM2YtYzIxNS00NDEwLThiMTctNzBjYzI3ZmViODg1
import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration: personal key assigned to each user as a unique ID
var firebaseConfig = {
    apiKey: "AIzaSyCGXS8SFgloMJumn2Fksncj7GdqjiOaWog",
    authDomain: "burguerqueen-24-7.firebaseapp.com",
    projectId: "burguerqueen-24-7",
    storageBucket: "burguerqueen-24-7.appspot.com",
    messagingSenderId: "523612359096",
    appId: "1:523612359096:web:25fafcd5ef4930cec6e74d"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
// Data base storage
export const db = fb.firestore();

