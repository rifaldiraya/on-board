import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Pages
import PageTest from './pages/PageTest';
import Traffic from './pages/Traffic/Traffic';
import Dashboard from './pages/Dashboard';
import BandwidthOnPaperSetOnActive from './pages/BandwidthOnPaperSetOnActive/BopActive';
import BandwidthOnPaperNormal from './pages/BandwidthOnPaperNormal/BopNormal';
import BandwidthOnPaperWO from './pages/BandwidthOnPaperWO/BopWO';

function RoutePage() {
  return (
    <BrowserRouter>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/active" component={BandwidthOnPaperSetOnActive} />
      <Route path="/normal" component={BandwidthOnPaperNormal} />
      <Route path="/wo" component={BandwidthOnPaperWO} />
      <Route path="/traffic" component={Traffic} />
    </BrowserRouter>
  );
}

export default RoutePage;
