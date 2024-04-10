// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC26moKDAMdcH3kCDQN_egaSuKHz88DZH0',
  authDomain: 'curso-node-express-6f8e6.firebaseapp.com',
  projectId: 'curso-node-express-6f8e6',
  storageBucket: 'curso-node-express-6f8e6.appspot.com',
  messagingSenderId: '1040805874474',
  appId: '1:1040805874474:web:c15cef6a13f7fc7d9aac53'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);