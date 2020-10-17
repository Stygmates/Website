import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Switch from 'react-bootstrap/esm/Switch';
import HomePage from './HomePage/HomePage';
import DataVisualizationPage from './DataVisualizationPage/DataVisualizationPage';
import SpringPage from './SpringPage/SpringPage';


function App() {
  return (
  <Router>
    
  <Header/>
  <div style={{paddingBottom: "100px"}}>
  <Switch className="container-fluid p-0">
  <Route exact path="/datavisualization"><DataVisualizationPage/></Route>
  <Route exact path='/spring'><SpringPage/></Route>
  <Route exact path="/"><HomePage/></Route>
  </Switch>
  </div>
  <Footer/>
  </Router>);
}

export default App;
