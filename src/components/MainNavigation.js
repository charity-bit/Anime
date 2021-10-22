import React,{useState,useEffect} from 'react';
import {Nav,NavLink,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';
import {IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LoginPopUp from "../components/LoginPopUp";
import Home from '../pages/Home';

const MainNavigation = () =>{

  const [trigger,setTrigger] = useState(false);
  const handleSignIn = () =>{
    setTrigger(true);
  }
  
         useEffect(() => {
           return (
             <Home />
           )

                }, [])
  
return(
  <>
  
  <Nav>
  <NavMenu>
    <NavLink to='/' >
      Home
    </NavLink>
    <NavLink to='/series' >
      Series
    </NavLink>
    <NavLink to='/movies'>
      Movies
    </NavLink>
    <NavLink to='/airing'>
      Airing Now
    </NavLink>
  </NavMenu>
  <NavBtn>
    <NavBtnLink to ="/signin" onClick={handleSignIn}>
      SignIn
    </NavBtnLink>
    <hr style= {{height:'20px'}}/>
    <IconButton
                variant="contained"
                color="primary"
                type="submit"
              
               >
                <SearchIcon />
                
                </IconButton>
            
  </NavBtn>

  <LoginPopUp 
  trigger={trigger} setClose={setTrigger}/>


</Nav>
  </>
);

}

export default MainNavigation;