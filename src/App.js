import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Results from "./pages/Results";
import Home from "./pages/Home";
import SingleView from "./pages/SingleView";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Airing from "./pages/Airing";
import LoginPopUp from "./components/LoginPopUp";
import { SearchContext } from "./context/search";
import { AiringContext } from "./context/AiringContext";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [airing, setAiring] = useState([]);
  const [singleAiring, setSingleAiring] = useState({});

  const setData = (data) => {
    setAnimeData(data);
  };
  const setSingle = (data) => {
    setSingleData(data);
  };
  const search = (query) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&limit=20`
    ).then((response) => response.json());
  };

  const setAiringAnime = (data) => {
    setAiring(data);
  };
  const setSingleAiringAnime = (data) => {
    setSingleAiring(data);
  };
  const getAiring = async () => {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1/airing");
    const data = await response.json();
    return await data;
  };
  getAiring();

  return (
    <AiringContext.Provider
      value={
        {airing, setAiringAnime, singleAiring, setSingleAiringAnime, getAiring}
      }
    >
      <SearchContext.Provider
        value={{ search, animeData, setData, singleData, setSingle }}
      >
        <Router>
          {/* nav bar */}
          <MainNavigation />
          {/* main content */}
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/results" exact>
                <Results />
              </Route>
              <Route path="/single-view" exact>
                <SingleView />
              </Route>

              <Route path="/movies" exact>
                <Movies />
              </Route>
              <Route path="/airing" exact>
                <Airing />
              </Route>
              <Route path="/series" exact>
                <Series />
              </Route>
              <Route path="/signin" exact>
<LoginPopUp />
              </Route>

              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      </SearchContext.Provider>
    </AiringContext.Provider>
  );
}

export default App;
