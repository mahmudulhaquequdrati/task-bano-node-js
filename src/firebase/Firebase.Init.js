import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Cofig";

const FirebaseInit = () => {
  initializeApp(firebaseConfig);
};
export default FirebaseInit;
