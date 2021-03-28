import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Movie = ({movie}) => {

    const [movieImage,setMovieImage] = useState();

    useEffect(()=>{
        async function getImage(){
            let image = await axios.get(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)
            setMovieImage(image.config.url);
        }
        getImage();
    },[])
    return (   
        <>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={movieImage} alt=""/>
            <p>{movie.vote_average}</p>
            {console.log(movieImage)};
        </>
     );
}
 
export default Movie;