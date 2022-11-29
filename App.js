import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Note from "./components/Taking notes/Note";
import Display from "./components/display notes/Display";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Display />
     
    </div>
  );
}

export default App;
