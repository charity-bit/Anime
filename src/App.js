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
import Movies from './pages/Movies';
import Series from './pages/Series';
import Airing from './pages/Airing';
import {SearchContext} from './context/search'
import {AiringContext} from './context/AiringContext';

function App() {
  const [animeData,setAnimeData] = useState([]);
  const [singleData,setSingleData] = useState({});
  const [airing,setAiring] = useState ([]);
  const [singleAiring,setSingleAiring] = useState ({});


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
 
const setAiringAnime = (data) =>{ 
      setAiring(data)
}
const setSingleAiringAnime =(data) =>{
  setSingleAiring(data);
}
const getAiring = () =>{
  return fetch(
    'https://api.jikan.moe/v3/top/anime/1/airing'
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
          
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <AiringContext.Provider value={airing,setAiringAnime,singleAiring,setSingleAiringAnime,getAiring}>
   
          <Route path="/airing" exact>
            <Airing />
          </Route>
          </AiringContext.Provider>
          
          <Route path="/series" exact>
            <Series />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </SearchContext.Provider>
  
  );
}

export default App;
