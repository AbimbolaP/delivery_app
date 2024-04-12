import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4Rdhay1bd-XducwZ_rliUd4BgHNyZGw",
  authDomain: "deliveryapp-70ae7.firebaseapp.com",
  databaseURL: "https://deliveryapp-70ae7-default-rtdb.firebaseio.com",
  projectId: "deliveryapp-70ae7",
  storageBucket: "deliveryapp-70ae7.appspot.com",
  messagingSenderId: "948587691859",
  appId: "1:948587691859:web:f091b74334a0d88acceba6"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };