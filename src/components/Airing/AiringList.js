import React from "react";
import {GridList} from "@material-ui/core";
import AiringCard from "./AiringCard";

const AiringList = (props) =>{
    
    return (
        <GridList>
            {props.data?.map((airing_anime)=>{
                return <AiringCard key={airing_anime.mal_id} airing_anime={airing_anime} />
            })}
        </GridList>
       
        
    );

}
export default AiringList;