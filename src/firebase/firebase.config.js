// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBmaqOlt0FLYXK0i0D6AkfNi04WXwZ7Ys",
    authDomain: "espresso-emporium-e9023.firebaseapp.com",
    projectId: "espresso-emporium-e9023",
    storageBucket: "espresso-emporium-e9023.appspot.com",
    messagingSenderId: "252984109935",
    appId: "1:252984109935:web:c40373c314c9d0dc9e569a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;