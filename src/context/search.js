import { createContext } from "react";

export const SearchContext = createContext({
  animeData: [], //anime Data ..all results
  singleData: {}, // single data 
  search: () => {}, //search function
  setData: () => {}, // set AnimeData function
  setSingle: () => {}, //set Single data Function
});
