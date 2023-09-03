import React from "react";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./Components/About";
import Project from "./Components/Project";
import ContectMe from "./Components/ContectMe";
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contect" element={<ContectMe/>}></Route>
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
