import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";

const AuthContext = React.createContext();

//This page contains functions to handle firebase signup, login,l
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //Sign up functionality
  function createNewUser(Email, Password) {
    return createUserWithEmailAndPassword(auth, Email, Password);
  }

  //Login functionality
  function loginEmailPassword(Email, Password) {
    return signInWithEmailAndPassword(auth, Email, Password);
  }
  //Logout functionality
  function logout() {
    return signOut(auth);
  }

  //Reset Password functionality
  function resetPassword(Email) {
    return sendPasswordResetEmail(auth, Email);
  }

  //   //Update email
  //   function updateEmailFunction(Email) {
  //     return updateEmail(currentUser, Email);
  //   }

  //   //Update password
  //   function updatePasswordFunction(Password) {
  //     return updatePassword(currentUser, Password);
  //   }

  // Per firebase, Checks state of auth to allow navigation
  // of site, however, this was handeled with PrivateRoute. Preventing
  // individuals from seeing pages that were only for logged in users.
  // const monitorAuthState = async () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //       showApp(); //shows main app
  //       showLoginState(user);
  //       hideLoginError();
  //     } else {
  //       showLoginForm();
  //       setError = "You're not logged in.";
  //     }
  //   });
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    createNewUser,
    loginEmailPassword,
    currentUser,
    logout,
    resetPassword,
    // updateEmailFunction,
    // updatePasswordFunction,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
