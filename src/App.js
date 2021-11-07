import React from 'react';
import './App.css';
import Home from "./Home";
import Footer  from './components/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     <BrowserRouter>
        <Routes>
            <Route path= "/search">
                {/* <h1>This is the Search Page </h1> */}
              
              </Route>

              <Route path="/" element={<Home />} />
        </Routes>
     </BrowserRouter>
    <Footer/>

    </div>
  );
}

export default App;
