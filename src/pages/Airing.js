import React,{useEffect, useContext} from 'react';
import {AiringContext} from '../context/AiringContext';
import AiringList from '../components/Airing/AiringList';

export default function Airing() {
  const airing_context = useContext(AiringContext);
    useEffect (async () => {
      const data = await airing_context.getAiring();
       airing_context.setAiringAnime(data.top);
  },[airing_context]);

  
  return (
    <>
      <AiringList data={airing_context.airing} />
    </>
  );
}
