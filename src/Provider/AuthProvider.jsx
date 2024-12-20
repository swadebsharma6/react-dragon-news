import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const createUser =(email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const loginUser =(email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      const logOut =()=>{
            setLoading(true);
            return signOut(auth);
      }


      // observer
      useEffect(()=>{
          const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                  setUser(currentUser);
                  console.log('observing', currentUser)
            });
            return ()=>{
                  unSubscribe();
            }
      }, [])

      

      const authInfo ={
            user,
            loading,
            createUser,
            loginUser,
            logOut,


      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;