import React, { useEffect, useState } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const myRequest=(email)=>{
    return fetch(`https://food-donet-server.vercel.app/myrequest?email=${email}`,{
      headers:{
        authorization:`Bearer ${user?.accessToken}`
      }
    }).then(res=>res.json())
  }
 

  

  const handleLoginWithEmailPass=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const createUserWithGoogle=()=>{
    setLoading(true)
        const Provider=new GoogleAuthProvider
        return signInWithPopup(auth,Provider);
    }

    const createUser=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const UpdateUserProfile=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
    }

    const handleResetPassword=(email)=>{
      setLoading(true)
      return sendPasswordResetEmail(auth,email)
    }

    const handlesignOut=()=>{
      return signOut(auth)
    }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged (auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUserWithGoogle,
    handlesignOut,
    handleLoginWithEmailPass,
   
    handleResetPassword,
    createUser,
    UpdateUserProfile,
    myRequest,
    
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
