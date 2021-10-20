import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  /*-------------------------------------------------------------------------------*\
  /////////////////////////// SIGN IN WITH GOOGLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  /* const signInWithGoogle = () => {
    
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }; */

  //After redirect_uri
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  /*-------------------------------------------------------------------------------*\
  ///////////////////////////////// OBSERVER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// FORM HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const nameBlurHandler = (e) => {
    setName(e.target.value);
  };
  const emailBlurHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordBlurHandler = (e) => {
    setPassword(e.target.value);
  };
 

  /*-------------------------------------------------------------------------------*\
  ///////////////////// CREATE NEW USER Email/Password \\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const userName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      /* .then((result) => {
        const user = result.user;
        console.log(user);
        setError(""); //To clear the previous error
        userName();
      })
      .catch((error) => {
        setError(error.message);
      }); */
  };

  /*-------------------------------------------------------------------------------*\
  /////////////////// SIGN IN Email/Password \\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const processLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    /* .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      }); */
  };

  /*-------------------------------------------------------------------------------*\
  ////////////////////////////////// LOG OUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(true));
  };
  /*-------------------------------------------------------------------------------*\
  ////////////////////////////////// RETURN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  return {
    user,
    name,
    email,
    password,
    userName,
    error,
    isLoading,
    setError,
    passwordBlurHandler,
    emailBlurHandler,
    nameBlurHandler,
    signInWithGoogle,
    registerNewUser,
    processLogin,
    logOut,
  };
};

export default useFirebase;
