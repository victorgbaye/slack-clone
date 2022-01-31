import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header/>
      <div className="app__body">
        <Sidebar/>
      </div>
      {/* SIDEBAR */}
      {/* REACT-ROUTER->CHAT SCREEN */}

    </div>
  );
}

export default App;
