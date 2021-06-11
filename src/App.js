import React, {Component} from 'react';
import Home from './components/Nav';
import Nav from './components/Home';
import MovieDetails from './components/MovieDetails';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className= "App">
      <Route exact path= "/" component= {Home}/>
      <Route path= "/MovieDetails" component= {MovieDetails}/>
      <Nav/>


    </div>
    </BrowserRouter>
  );
  }
}
  

export default App;
