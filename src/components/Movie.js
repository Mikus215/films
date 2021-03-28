import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Movie = ({movie}) => {
    // image state
    const [movieImage,setMovieImage] = useState();
    // get image from api
    useEffect(()=>{
        async function getImage(){
            let image = await axios.get(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`)
            setMovieImage(image.config.url);
        }
        getImage();
    },[])
    return (   
        <>
            <MovieBox>
                <Rating>{movie.vote_average}</Rating>
                <Title>{movie.title}</Title>
                <img src={movieImage} alt=""/>
                <p>{movie.overview}</p>
                {console.log(movieImage)}
            </MovieBox>
        </>
     );
}



const MovieBox = styled(motion.div)`
    position: relative;
    width: 500px;
    margin: .5rem;
    box-shadow: 0px 0px 5px rgba(0,0,0,.8);
`;

const Title = styled(motion.h1)`
    text-align: center;
    font-size: 1.4rem;
`;

const Rating = styled(motion.p)`
    position: absolute;
    right: .2rem;
    top: -.9rem;
`;
 
export default Movie;