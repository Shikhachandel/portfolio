import React from "react";
import { Route, Routes } from "react-router-dom";
import "./utils/css-constants.css";
import "./style";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import About from "./pages/about";
import { Background, GlobalStyle } from "./style";
import Project from "./pages/project";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Experiences from "./pages/experiences";


function App() {
  return (
    <Background>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:company_name" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project_name" element={<Project />} />
      </Routes>
    </Background>
  );
}

export default App;
