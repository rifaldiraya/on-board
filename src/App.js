import React from 'react';
import './App.css';

//Routing
import { BrowserRouter, Route } from 'react-router-dom';

//Tes
import FunctionPageTest from './pages/FunctionPageTest'

//Pages
import Dashboard from './pages/Dashboard';
import PageTest from './pages/PageTest';
import Traffic from './pages/Traffic/FunctionTraffic';
import BandwidthOnPaperSetOnActive from './pages/BandwidthOnPaperNormal/BopFunctionNormal';
import BandwidthOnPaperNormal from './pages/BandwidthOnPaperNormal/BopFunctionNormal';
import BandwidthOnPaperWO from './pages/BandwidthOnPaperWO/BopFunctionWO';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/active" component={BandwidthOnPaperSetOnActive} />
        <Route path="/normal" component={BandwidthOnPaperNormal} />
        <Route path="/wo" component={BandwidthOnPaperWO} />
        <Route path="/traffic" component={Traffic} />
      </BrowserRouter>
      <PageTest />
    </div>
  );
}

export default App;
