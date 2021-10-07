import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import { Typography } from "@material-ui/core";
import SingleAnime from '../components/SingleAnime'
const SingleView = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (
      search.singleData === undefined ||
      Object.keys(search.singleData).length === 0
    ) {
      //if we have no data , fetch from local storage
      try {
        search.setSingle(JSON.parse(localStorage.getItem("singleData")));
        setDataExists(true);
      } catch (error) {
        //if it doesnt exist in local memory
        setDataExists(false);
      }
    }
  }, [search]);
  return (
    <div>
      {(dataExists && <SingleAnime />) || (
        <Typography variant="h4" component="h1">
          No data exists
        </Typography>
      )}
    </div>
  );
};

export default SingleView;
