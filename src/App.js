import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Techstack from "../src/components/About/Techstack"
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumeNew from "./components/Resume/ResumeNew";
import Home2 from "./components/Home/Home2";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
    
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
     
        <ScrollToTop />
        <Home />
        <Home2 />
       
        <Techstack />
        <Projects />
        
        {/* <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/project" element={<Projects />} ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes> */}
    <ResumeNew/>
        <Footer />
      </div>
    // </Router>
    
  );
}

export default App;
