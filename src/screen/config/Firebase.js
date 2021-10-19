import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDZWapZlnG1SUsma_a6llucLCWFe-61f6k",
  authDomain: "projects-c8b81.firebaseapp.com",
  databaseURL: "https://projects-c8b81-default-rtdb.firebaseio.com",
  projectId: "projects-c8b81",
  storageBucket: "projects-c8b81.appspot.com",
  messagingSenderId: "682133664819",
  appId: "1:682133664819:web:e73b4d5e6c2273c98e9f46"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;


