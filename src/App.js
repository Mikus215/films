import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import styled from 'styled-components';
import {motion} from 'framer-motion';

function App() {

  // get movies
const [movies,setMovies] = useState([])

  useEffect(()=>{
    async function getApi () {
      const url = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdd6a290202b053fbed3da96bfba9943&page=1');
      setMovies(url.data.results);
    }

    getApi();

    },[])

    return (
      <>    
      {console.log(movies)}
      <Title>The Most Popular Movies</Title>
      
<Wrapper>
    <MoviesBoxes>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
      ))}
    </MoviesBoxes>
</Wrapper>
      </>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MoviesBoxes = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    padding: .4rem .2rem;
    max-width: 1600px;
    flex-wrap: wrap;;
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  text-align: center;
`;
export default App;
