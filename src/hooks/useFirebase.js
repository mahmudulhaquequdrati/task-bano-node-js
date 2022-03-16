import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

import FirebaseInit from "../firebase/Firebase.Init";

FirebaseInit();
const useFireabse = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  // register user
  const registerUser = (email, password, name, photo, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        alert("user created!");
        const updatedUser = {
          email: email,
          displayName: name,
          photoURL: photo,
        };
        setUser(updatedUser);
        // send user info to fireabse
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        // saveDatabase(photo);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Register Error", errorMessage);
      });
  };

  // login user
  const loginUser = (email, password, navigate) => {
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

  // send user photo to database
  // const saveDatabase = (photo) => {
  //   const userPhoto = { photo: photo };
  //   fetch("/");
  // };

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
