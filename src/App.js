import React from 'react'
import './App.css';

//Routing
import { BrowserRouter, Route} from 'react-router-dom'

//Components
import Navbar from './component/Navbar'

//Pages
import PageTest from './pages/PageTest'
import Traffic from './pages/Traffic/Traffic'
import Dashboard from './pages/Dashboard'
import BandwidthOnPaperSetOnActive from './pages/BandwidthOnPaperSetOnActive/BandwidthOnPaperSetOnActive';
import BandwidthOnPaperNormal from './pages/BandwidthOnPaperNormal/BandwidthOnPaperNormal';
import BandwidthOnPaperWO from './pages/BandwidthOnPaperWO/BandwithOnPaperWO';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/active" component={BandwidthOnPaperSetOnActive}/>
        <Route path="/normal" component={BandwidthOnPaperNormal}/>
        <Route path="/wo" component={BandwidthOnPaperWO}/>
        <Route path="/traffic" component={Traffic}/>
      </BrowserRouter>
      <PageTest />
    </div>
  );
}

export default App;
