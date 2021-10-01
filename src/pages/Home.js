import React, { useContext, useEffect,useState} from "react";
import { SearchContext } from "../context/search";
import {FormControl,Input,IconButton,Grid} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import './Home.scss';

const Home = () => {

  const search = useContext(SearchContext);
  const [input,setInput] = useState('');
  // useEffect(()=>{

  //   search.search('Naruto').then((data)=>{
  //     console.log(data);
  //   });
  // },[search]);
  const handleSearch = (event)=>{
    event.preventDefault();



  }

  return (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
      <Grid item>
        <Grid item>
        <img alt="Compulsive Gumbler" src={`${process.env.PUBLIC_URL}/tanjiro.jpg`} height="400" width="500"/>
        </Grid>
        <Grid item>
          <form className="home__form">
            <FormControl type="submit" className=".home_formControl">
              <Input placeholder="Search for favourite Anime.."  className="home__input"
              value={input} onChange={(event) =>{
                setInput(event.target.value)
              }}/>
              <IconButton variant="contained" className="home__iconbutton"
              color="primary" type="submit" disabled={!input} onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </FormControl>

          </form>
        </Grid>
      </Grid>
 
    </Grid>



  );
};

export default Home;
