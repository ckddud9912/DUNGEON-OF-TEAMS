import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBo6hnZXR7u_bAM9Og1pyGQTs2ZTzY3up4",
  authDomain: "dungeon-of-teams.firebaseapp.com",
  databaseURL: "https://dungeon-of-teams-default-rtdb.firebaseio.com",
  projectId: "dungeon-of-teams",
  storageBucket: "dungeon-of-teams.firebasestorage.app",
  messagingSenderId: "889695340476",
  appId: "1:889695340476:web:5096c17b79492f5e904db9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

import { remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
export { db, ref, set, onValue, update, get };