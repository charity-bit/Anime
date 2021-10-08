import React from "react";
import AnimeCard from "./AnimeCard";
import { GridList } from "@material-ui/core";

// component for anime Data
const AnimeList = (props) => {
    

  
  return (
    <GridList>
      {props.data.map((anime) => {
       return <AnimeCard key={anime.mal_id} anime={anime} />;
      })}
    </GridList>
  );
};

export default AnimeList;
