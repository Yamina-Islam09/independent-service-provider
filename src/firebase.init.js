// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId,

  apiKey: "AIzaSyDB7oJ43c7BH4FYO2M5gWnTOXRM59uaSYY",
  authDomain: "assignment-10-87e84.firebaseapp.com",
  projectId: "assignment-10-87e84",
  storageBucket: "assignment-10-87e84.appspot.com",
  messagingSenderId: "114063416895",
  appId: "1:114063416895:web:3ac50c205d1eb4b32a228a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;