import React from 'react';
import {Nav,NavLink,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';
import {IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const MainNavigation = () =>{

  const handleClick  = ()=>{

  }
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
    <NavBtnLink to ="/signin">
      SignIn
    </NavBtnLink>
    <NavBtnLink to ="/signin">
      SignUp
    </NavBtnLink>
    <hr style= {{height:'20px'}}/>
    <IconButton
                variant="contained"
                color="primary"
                type="submit"
                onClick ={handleClick}
               >
                <SearchIcon />
                
                </IconButton>
            
  </NavBtn>


</Nav>
  </>
);

}

export default MainNavigation;