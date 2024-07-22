import { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <div className="divider" />
    </div>
  );
}

export default App;
