import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';

function App() {

  // get movies
const [movies,setMovies] = useState([])

  useEffect(()=>{
     async function getApi () {
       const url = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdd6a290202b053fbed3da96bfba9943&page=1')
     
     setMovies(url.data.results)
    }

    getApi();

    },[])

    return (
      <>    
      {console.log(movies)}
      
      {movies.map(movie => (

        <Movie key={movie.id} movie={movie} />

    ))}
      </>
  );
}

export default App;
