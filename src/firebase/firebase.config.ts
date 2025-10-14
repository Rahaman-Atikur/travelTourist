// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI8iMqUfv5dldGkEHmUHHaglKB0Wnre9Y",
  authDomain: "travel-tourist-app.firebaseapp.com",
  projectId: "travel-tourist-app",
  storageBucket: "travel-tourist-app.firebasestorage.app",
  messagingSenderId: "1031082162529",
  appId: "1:1031082162529:web:f961c4796b062f86a6ad20"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export default app;