import React, { Fragment } from "react";
import Contact from "./components/Layout/Contact";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Portfolio from "./components/Layout/Portfolio";
import Skills from "./components/Layout/Skills";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </Fragment>
  )
};

export default App;
