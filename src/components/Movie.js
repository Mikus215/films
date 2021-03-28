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
               <Circle> 
                   <Rating>{movie.vote_average}</Rating>
                </Circle>
                <Title>{movie.title}</Title>
                <img src={movieImage} alt=""/>
                <Descritption>{movie.overview}</Descritption>
            </MovieBox>
        </>
     );
}



const MovieBox = styled(motion.div)`
    position: relative;
    width: 500px;
    margin: .5rem;
    box-shadow: 0px 0px 10px rgba(0,0,0,.8);
    background-color: #e3e3e3;
`;

const Title = styled(motion.h1)`
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem;
`;

const Rating = styled(motion.p)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const Circle = styled(motion.div)`
    position: absolute;
    right: 0rem;
    top: 0rem;
    padding: .5rem;
    width: 45px;
    border-radius: 50%;
    border: 3px solid lime;
`;

const Descritption = styled(motion.p)`
    padding: 1rem 1rem;
    font-size: 1.2rem;
`;
 
export default Movie;