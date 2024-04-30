import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Upload from "./Components/Upload";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Department from "./Components/Department";
import Cse from "./Cse";
import Ece from "./Ece";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
          <Route path="/cse" element={<Cse />} />
          <Route path="/ece" element={<Ece />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
