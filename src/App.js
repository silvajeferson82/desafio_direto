import React, { Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'


function App(){

    return(
      <div>
        <h1>Lista Devedores</h1>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
          
      </div>
     
    )
  }


export default App;
