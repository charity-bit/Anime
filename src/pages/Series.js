import React,{useEffect} from 'react';

export default function Series() {
useEffect(()=>{
  async function getData(){
    const response = await fetch(
         'https://api.jikan.moe/v3/top/anime/1/airing'
      
    );
    const data = await response.json();
    console.log(data);
  }
  getData();
 
})
  return (
    <>
      series
    </>
  );
}
