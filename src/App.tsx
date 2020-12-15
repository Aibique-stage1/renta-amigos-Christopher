import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyled from './GlobalStyled';

import './App.css';
import Modal from './modal-renta-amigos/Modal';
import Home from './Home';



const App = ()=> {
  return (
   <>
   <GlobalStyled/>
   <Router>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/modal" component={Modal} />
     </Switch>
   </Router>
   </> 
  );
}

export default App;
