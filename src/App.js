import React from "react";

import {
  About,
  Footer,
  Header,
  Projects,
  Skills,
  // Experience,
} from "./container";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />

      <Footer />
    </div>
  );
};

export default App;
