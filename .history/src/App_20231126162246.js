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
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";

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
        <Work
        <Testimonials />
        <Contactme />
      </main>
      <Footer />

      <ScrollUp />
    </>
  );
};

export default App;
