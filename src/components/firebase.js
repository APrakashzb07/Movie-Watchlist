import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";


const firebaseConfig = {
  apiKey: "AIzaSyCg1fCEO8i7MQnM3SiMJPiVcADp_NI9XTw",
  authDomain: "movie-app-1-6ec44.firebaseapp.com",
  projectId: "movie-app-1-6ec44",
   storageBucket: "movie-app-1-6ec44.appspot.com",
   messagingSenderId: "950886341278",
  appId: "1:950886341278:web:f4feb188157227da55398f",
 };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {

    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccessNotify("Registered successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);

  }
};

export const signIn = async (email, password, navigate) => {
  try {
 
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
  
  }
};

export const logOut = () => {
  signOut(auth);
  toastSuccessNotify("Logged out successfully!");
};

export const userObserver = (setCurrentUser) => {

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
     
      setCurrentUser(false);
    }
  });
};


export const signUpProvider = (navigate) => {
  
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toastWarnNotify("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
    });
};