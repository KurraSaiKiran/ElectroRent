import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbrqaNd5S_y_ZkDyu_UySJ_c4Qu98R7eo",
  authDomain: "remotedesk-f9177.firebaseapp.com",
  projectId: "remotedesk-f9177",
  storageBucket: "remotedesk-f9177.firebasestorage.app",
  messagingSenderId: "27008976843",
  appId: "1:27008976843:web:a26cbe6569457f2828584e",
  measurementId: "G-XMBGNHBTLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence when possible
// This will allow the app to work even when offline
try {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled in one tab at a time
      console.warn('Firestore persistence failed: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      // The current browser does not support persistence
      console.warn('Firestore persistence not supported in this browser');
    }
  });
} catch (err) {
  console.error('Error enabling Firestore persistence:', err);
}

export default app;
