import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../src/componentes/Home";
import Courses from "../src/componentes/Courses";
import Live from "../src/componentes/Live";
import Contact from "../src/componentes/Contact";
import Contador from "../src/componentes/Contador";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/course" class="list">
            Courses
          </Link>
          <Link to="/live" class="list">
            Live 
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
          <Link to="/contador" class="list">
            Contador
          </Link>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contador" element={<Contador />} />
      </Routes>
    </div>
  );
}

export default App;