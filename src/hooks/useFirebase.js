import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import FirebaseInit from "../firebase/Firebase.Init";

FirebaseInit();
const useFireabse = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const auth = getAuth();

  // register user
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        alert("user created!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Register Error", errorMessage);
      });
  };

  // login user
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("login error", errorMessage);
      });
  };

  // reset password
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(" Password reset email sent!");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // observe the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
      }
    });
  }, [auth]);

  return {
    user,
    registerUser,
    loginUser,
    resetPassword,
    logout,
  };
};
export default useFireabse;
