import React from 'react';
import PopularMovie from './pages/PopularMovie';
import GlobalStyle from './components/GlobalStyle'
import { Switch, Route  } from 'react-router-dom';
import Nav from './components/Nav';

function App() {

    return (
      <>    
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route>
          <PopularMovie path="/" exact/>
        </Route>
      </Switch>
      </>
  );
}


export default App;
