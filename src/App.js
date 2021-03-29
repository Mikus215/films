import React from 'react';
import PopularMoviesHome from './pages/PopularMoviesHome';
import GlobalStyle from './components/GlobalStyle'
import { Switch, Route  } from 'react-router-dom';
import Nav from './components/Nav';
import PopularFilms from './pages/PopularFilms';

function App() {

    return (
      <>    
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <PopularMoviesHome/>
        </Route>
        <Route path="/popularfilms" >
          <PopularFilms path="/" exact />
        </Route>
      </Switch>
      </>
  );
}


export default App;
