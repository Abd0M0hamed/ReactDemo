//'use strict';

import React from "react";
import ReactDOM from "react-dom";

import TopBar from "./TopBar";
import Footer from "./Footer"
import Body from "./Body"
function App() {

  return (
    <div className="app">
      <TopBar />
      <Body />
      <Footer />
    </div>
  )
}
//ReachDOM.render(WHAT TO RENDER, WHERE TO RENDER);

export default App
