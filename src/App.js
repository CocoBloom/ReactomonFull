import './App.css';
import React from 'react'; 
import Header from './components/layout/Header';
import {Types} from './components/pages/Types';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Pokemons} from './components/pages/Pokemons';
import {PokemonDetail} from './components/pages/PokemonDetail';
import { TypeDetail } from './components/pages/TypeDetail';
import { CatchProvider } from './components/pages/CatchContext';
import { CatchedList } from './components/pages/CatchedList';

const App = () => {

  let content = (
      <Router>
        <CatchProvider>
        <div className="App">
          <div className="container">
            <h1>Reactomon</h1>
            <Header />
            <Route exact path="/" component={ Home }/>
            <Route path="/pokemons" render={() => (
              <React.Fragment>
                <Pokemons/>
              </React.Fragment>
            )} 
            />
            <Route path="/types" render={() => (
              <React.Fragment>
                <Types/>
              </React.Fragment>
            )}
            />
            <Route path="/pokemon/:id" render={() => (
                <React.Fragment>
                  <PokemonDetail/>
                </React.Fragment>
            )} 
             />
             <Route path="/type/:id" render={() => (
                <React.Fragment>
                  <TypeDetail/>
                </React.Fragment>
            )} 
             />
             <Route path="/catchedpokemons" render={() => (
                <React.Fragment>
                  <CatchedList/>
                </React.Fragment>
            )} 
             />
          </div>
        </div>
        </CatchProvider>
      </Router>
  );

  return content;
}


export default App;
