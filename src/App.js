import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/moovisearch';
import MoviList from './components/moovilist'
import AddMovie from './components/mooviadd';
import {MooviInfo} from './const/const'
import Description from "./components/description";

function App() {
  


  const[movies,setMovies]=useState(MooviInfo);
  const[filtredname,setFiltredname]=useState('');
  const[filtredrate,setFiltredrate]=useState(0);




  return (
    <Router>
    <div className="App">
      
    <Route exact path='/' >
      <Search setFiltredname={setFiltredname} setFiltredrate={setFiltredrate}/> 
      <MoviList movies={movies} filtredname={filtredname} filtredrate={filtredrate} />
      <AddMovie movies={movies} setMovies={setMovies} />
      </Route>
      <Route exact path="/description/:movieId" >
        <Description movies={movies}/>
       </Route>
    
    
    </div>
    </Router>
  );
}


export default App;
