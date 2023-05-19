import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC78ViiPgm8gkxJEr9O-rLXBk7L8vvyMRE",
  authDomain: "chat-react-82dde.firebaseapp.com",
  projectId: "chat-react-82dde",
  storageBucket: "chat-react-82dde.appspot.com",
  messagingSenderId: "295084827652",
  appId: "1:295084827652:web:9bb544fc7def12f314c151"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// обьект для авторизации
const auth = firebase.auth();
export const firestore = firebase.firestore();

export const Context = createContext<any>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{firebase,auth,firestore}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);