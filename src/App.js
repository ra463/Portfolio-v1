import "./App.css";
import React from "react";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Education, Work } from "./container";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Education />
        <Footer />
      </div>
  );
}

export default App;
