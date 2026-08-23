// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnANvEukseVm62uxo-dSKrvTw2P7XPFFI",
  authDomain: "silvis-galerie.firebaseapp.com",
  projectId: "silvis-galerie",
  storageBucket: "silvis-galerie.firebasestorage.app",
  messagingSenderId: "198702321200",
  appId: "1:198702321200:web:b141e502dbf762c49667f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
