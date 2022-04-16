import React, { useEffect, useState } from "react";
import './App.css';
import TopNav from "./components/TopNav/TopNav.js";
import SectionA from "./components/SectionA/sectionA.js";
import What from "./components/What/what.js";
import BottomNav from "./components/BottomNav/BottomNav.js";


function App() {
  return (
    <div className="App">
      <TopNav/>
      <SectionA/>
      <What/>
      <BottomNav/>
    </div>
  );
}

export default App;
