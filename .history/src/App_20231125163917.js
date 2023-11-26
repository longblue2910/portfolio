import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Service from "./components/services/Service";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contactme from "./components/contactme/Contactme";
const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
        <Qualification />
        <Testimonials />
        <Contactme />
      </main>
    </>
  );
};

export default App;