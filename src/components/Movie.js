import React from 'react';
import ProTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie( {  title, year, summary, poster ,genres} ){
    
    return(
        <div className="movie">
            <Link to={
                {pathname:'./movie-detail' , 
                state:{year , title , summary, poster, genres},
                }
            }>
                <img src={poster} alt={title} title={title}/>
            </Link>
            <div className="movie_data"> 
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                
                <ul className="movie_genres">
                    {genres.map( (genre ,index) =>{
                        return <li key={index} className="movie_genre">{genre}</li>
                    } )}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
        </div>
        );
}

Movie.ProTypes = {
    year:ProTypes.string.isRequired,
    title:ProTypes.string.isRequired,
    summary:ProTypes.string.isRequired,
    poster:ProTypes.string.isRequired,
    genres:ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie;