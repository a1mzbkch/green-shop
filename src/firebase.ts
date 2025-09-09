import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkIkMeEdbLxlDA-vM2SI1w28TbwR6-D5c",
  authDomain: "greenshop-1ade6.firebaseapp.com",
  projectId: "greenshop-1ade6",
  storageBucket: "greenshop-1ade6.firebasestorage.app",
  messagingSenderId: "660598624266",
  appId: "1:660598624266:web:327f451f0c4f3ce2588ff3",
  measurementId: "G-V9CQ8QF7TY",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

googleProvider.addScope("email");
googleProvider.addScope("profile");
facebookProvider.addScope("email");
facebookProvider.addScope("public_profile");
