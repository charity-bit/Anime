import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/search";
import { FormControl, IconButton, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.scss";

const Home = () => {
  const history = useHistory();

  const search = useContext(SearchContext);

  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      search.setData(data.results);
      localStorage.setItem("myData", JSON.stringify(data.results));
      history.push("./results");
    });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <Grid item>
           
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50vw",
              height: "50vh",
            }}
          >
            <FormControl type="submit" className="home__formControl"
              style={{backgroundColor:'lightgray'}}
            
            >
              <TextField
                style= {{color:"#fff",backgroundColor:"#fff"}}
                value={input}
                placeholder="Seach Animes ..."
                type="search"
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                id="outlined-basic"
                label="search"
                variant="outlined"
                className="home__input"
              />

              <IconButton
                variant="contained"
                className="home__iconbutton"
                color="primary"
                type="submit"
                disabled={!input}
                onClick={handleSearch}
              >
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
