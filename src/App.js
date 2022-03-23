import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import {Router, Route} from 'react-router-dom'; 
import Switch from 'react-bootstrap/esm/Switch';
import HomePage from './HomePage/HomePage';
import DataVisualizationPage from './DataVisualizationPage/DataVisualizationPage';
import SpringPage from './SpringPage/SpringPage';
import FastAPIPage from './FastAPIPage/FastAPIPage';
import FirebasePage from './FirebasePage/FirebasePage';
import ReactGA from "react-ga4";  //Google Analytics

import { createBrowserHistory } from 'history';


//Google analytics, it may be possible to delete it once we use Firebase
ReactGA.initialize("G-E8J45Z5CPH", {
  gaOptions:{
    siteSpeedSampleRate: 100
  }});

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {

  const history = createBrowserHistory();
  //Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })

  return (

  <Router history={history}>
    
  <Header/>
  <div style={{paddingBottom: "100px"}}>
  <Switch className="container-fluid p-0">
  <Route exact path="/datavisualization"><DataVisualizationPage/></Route>
  <Route exact path='/spring'><SpringPage/></Route>
  <Route exact path='/fastapi'><FastAPIPage/></Route>
  <Route exact path='/firebase'><FirebasePage/></Route>
  <Route exact path="/"><HomePage/></Route>
  </Switch>
  </div>
  <Footer/>
  </Router>);
}

export default App;
