import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBNh64fSYOWeo2sSQyl517QY2WyzOwHOko',
  authDomain: 'sean-chat-61973.firebaseapp.com',
  projectId: 'sean-chat-61973',
  storageBucket: 'sean-chat-61973.appspot.com',
  messagingSenderId: '803370268364',
  appId: '1:803370268364:web:6945a16836cba8ec21f469',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
