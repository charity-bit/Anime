import React from 'react';
import "./LoginPopUp.scss";
import {auth} from '../firebase';
import {login} from '../features/userSlice';
import { useDispatch } from 'react-redux';



 const LoginPopUp = (props) =>{
         const [email,setEmail] = useState("");
         const [password,setPassword] =  useState("");
         const dispatch = useDispatch();

         const handleSignIn = () =>{
             auth.signInWithEmailAndPassword(email,password)
            .then(() => 
            dispatch(login ({
                email: userAuth.user.email,
                uid:userAuth.user.uid

            }))
            ).catch((error) => alert(error));
     

         }
         const handleSignUp = () => {
             auth.createUserWithEmailAndPassword(email,password)
             .then(userAuth =>
             dispatch(login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid

             }))
             ).catch((error) => alert(error))
             
         }

    return(    (props.trigger) ? (
        <div className="login">
            <div class="login__left">
            <img  src="https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_622MomoAVATARTHELASTAIRBENDERPIN.png?v=1627414697" alt="appa"/>
            </div>
            <div className="login__right">
                      
            <div className="login__header">
            <h2>Member Login</h2>
            <h1 onClick ={()=> props.setClose(false)}>X</h1>
            </div>
            <form className="login__form">
            

                <input type="email"
                   value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"  />
                <input type="password" onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                placeholder="Password" />
                  <button type="submit" onClick={handleSignIn} >LOGIN</button>
                <p>Dont' have an account? <span onClick={handleSignUp}>Register </span></p>
            </form>

            </div>
      
        </div>

    ) : ("")

    );


 }
 export default LoginPopUp;