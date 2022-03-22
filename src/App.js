import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from "./Chat"
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Router>
        <Header/>
        <div className="app__body">
          <Sidebar/> 
          <Routes>
            <Route path="/room/:roomId"  element={<Chat/>}/>
            <Route path="/">
            </Route>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
