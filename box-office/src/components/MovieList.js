import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie,index) => (
                <div className='image-container col-3 marg' onClick = { () => props.openPopup(movie.imdbID)}>
                    <img  src = {movie.Poster} height="450px" width="300px" alt = 'movie'></img>
                    <p id='title'>{movie.Title}</p>
                </div>
        ))}
        </>
    );
};
export default MovieList;