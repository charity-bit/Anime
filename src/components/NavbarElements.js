import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';


//nav
export const Nav = styled.nav`
background: transparent;
height: 85px;
display:flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) /2);
z-index: 12;

`;
//link
export const NavLink = styled(Link) `
 color:#fff;
 display:flex;
 align-items:center;
 text-decoration: none;
 font-family: 'Ephesis', cursive;
 padding: 0 1rem;
 height:100%;
 cursor:pointer;
 transition: all 1s ease-out;
 &.active{
     color: #3282B8
 }
 &.active
 :active{
     color:#fff
 }
 &:hover{
     color:#3282B8;

 }
`;
export const NavMenu = styled.div`
display:flex;
align-items:center;
@media screen and (max-width: 768px){
    display:none;
}
`;


export const NavBtn = styled.nav `
display: flex;
align-items: center;
padding:0;
height:50px;
margin-top: 1.2rem;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: transparent;
padding: 15px 22px;
color:#fff;
border:  none;
cursor: pointer;
font-family: 'Ephesis', cursive;
text-decoration:none;
transition: all 0.2s ease-in-out;
&:hover{
    transition: all 0.2s ease-in-ot;
    font-size: 24px;
}

`;