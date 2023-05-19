import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {

  apiKey: "AIzaSyDpYensasBXvi3b9NdZkIDyl7oJDDdYSPQ",
  authDomain: "bitebuddy-51bcd.firebaseapp.com",
  projectId: "bitebuddy-51bcd",
  storageBucket: "bitebuddy-51bcd.appspot.com",
  messagingSenderId: "876959591034",
  appId: "1:876959591034:web:f1cfe5c465a19b34cb29c3",
  measurementId: "G-1SX75QNXTX"
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
