import React,{useEffect, useContext} from 'react';
import {AiringContext} from '../context/AiringContext';
import AiringList from '../components/Airing/AiringList';

export default function Airing() {
  const airing_context = useContext(AiringContext);
    useEffect(()=>{
     airing_context.getAiring().then((data)=>{
       airing_context.setAiringAnime(data.top);
     })
  },[airing_context]);
  console.log (airing_context.airing);

  
  return (
    <>
      <AiringList data={airing_context.airing} />
    </>
  );
}
