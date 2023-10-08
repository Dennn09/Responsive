import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [dataMovie, setdataMovie] = useState([]);

  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_SERVER}3/movie/now_playing?language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
    },
  };

  const getDataMovie = async () => {
    
      const response = await axios.request(options);
      console.log(response.data);
      setdataMovie(response.data.results); 
   
  };

  const renderMovieList = () => {
    return dataMovie.map((value) => (
       <div key={value.id} className='w-[20rem] h-[35rem] mt-5 mx-4 flex flex-col hover:border border-emerald-50  hover:scale-105 '>
      <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={value.title} className='w-full h-auto' />
      <h2 className='mt-2 text-center '>{value.title}</h2>
    </div>
    ));
  };

  useEffect(() => { 
    getDataMovie();
    console.log(dataMovie, "ini data");
  }, []);

  return (
    <div className='flex flex-wrap justify-center text-center text-white bg-black'>
      <h1 className='w-full font-bold text-[2rem]'>Movie List</h1>
      {renderMovieList()}
    </div>
  );
}
