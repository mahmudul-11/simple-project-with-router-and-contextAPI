import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import initilizeAuthentication from "../Firebase/firbase.init";

initilizeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
           
    }
    // sign out 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    // state ovserber of firebase 
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
      });
   },[])
    return{
        user,
        signInWithGoogle, logOut
    }
}
export default useFirebase;