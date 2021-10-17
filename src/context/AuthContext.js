import React,{useEffect,useContext,useState,createContext, Children} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';


const AuthContext = createContext();

export const useAuth = useContext(AuthContext); //to access values from outside here


export const AuthProvider = ({children}) => 
{ 
    const  history = useHistory();
    //methods and states 
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
   
    export const signup = (email,password) =>{
        auth.createUserWithEmailAndPassword(email,password);
        history.push('/');
    }
   export const login = (email,password) => {
       auth.signInWithEmailAndPassword(email,password)
       history.push('/');

   }
   export const logout = () => {
            auth.signOut();
   }

    useEffect(() => {
      const unsub = auth.onAuthStateChanged(user=>{
          setUser(user);
          setLoading(false);
      })
      return unsub;
    
    }, [input]);
    const value = {
        user,
        login,
        signup,
        logout        
    }

 return (

     <AuthContext.Provider value={value}>
         {/* if not loading ,render children */}
         {!loading && children}
     </AuthContext.Provider>
 );  
}


