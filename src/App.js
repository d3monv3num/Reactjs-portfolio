import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from "./routes/Projects";
import Experience from './routes/Experience';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/project" element={<Project/>}/>
        <Route exact path="/contact" element={<Contact/>}/>  
        <Route exact path="/experience" element={<Experience/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
