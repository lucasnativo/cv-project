import React from "react";
import "./App.css";
import ContactMe from "./components/ContactMe";
import Name from "./components/Name";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <Name />
      <ContactMe />
      <Social />
    </div>
  );
}

export default App;