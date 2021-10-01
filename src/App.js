import React,{useState} from "react";
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
import {SearchContext} from './context/search'

function App() {
  const [animeData,setAnimeData] = useState([]);
  const [singleData,setSingleData] = useState({});

  const setData = (data) => {
       setAnimeData(data)
  }
  const setSingle = (data) => {
    setSingleData(data)
  }
const search =(query) =>{
  return fetch(
    `https://api.jikan.moe/v3/search/anime?q=${query}&limit=20`
  ).then((response) =>response.json());
}

  return (
    <SearchContext.Provider value={{search, animeData, setData,singleData,setSingle}}>
    <Router>
      <MainNavigation />
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
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;