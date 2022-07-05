import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from "./components/SearchBox";
import Popup from "./components/Popup";

import "./App.css";


const App =() => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [aboutValue,setaboutValue] = useState('');


const getMovieRequest = async(searchValue) => {
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=607e47e`
  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search){
  setMovies(responseJson.Search)
  }
}
const openPopup = async(id) => {

    const url2 = `https://www.omdbapi.com/?i=${id}&apikey=607e47e`  
    const response2 = await fetch(url2);
    const responseJson2 = await response2.json();
    setaboutValue(responseJson2);
}
const closePopup = () => {
  setaboutValue('');
}

useEffect(()=> {
  getMovieRequest(searchValue);
},[searchValue]);
  return <div className='container-fluid movie-app'>
    <div className="row d-flex" id='top'>
      < MovieListHeading heading = 'Movies' />
      < SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
    </div>

    <div className="row"><MovieList movies = {movies} openPopup={openPopup}/>
    </div>

    {(typeof aboutValue.Title != "undefined") ? <Popup Selected={aboutValue} closePopup={closePopup} /> : false}
    </div> 
};

export default App;
