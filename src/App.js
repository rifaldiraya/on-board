import './App.css';
import 'antd/dist/antd.css'; 
import React, { Route, BrowserRoute } from 'react'

//Components
import Navbar from './component/Navbar'

//Pages
import BandwithOnPaper from './pages/BandwithOnPaper'
import PageTest from './pages/PageTest'

function App() {
  return (
    <div className="App">
      <PageTest />
    </div>
  );
}

export default App;
