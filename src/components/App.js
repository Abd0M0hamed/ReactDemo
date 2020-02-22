//'use strict';

import React from "react";
import ReactDOM from "react-dom";

import TopBar from "./TopBar";
import Footer from "./Footer"
import Body from "./Body"

class App extends React.Component {
  
  getStyles(){
    return { display: "block"}
  }

  render(){
    const styles = this.getStyles()
    return (
      <div className="app" style={styles}>
        <TopBar />
        <Body />
        <Footer />
      </div>
    )
  }
}
//ReachDOM.render(WHAT TO RENDER, WHERE TO RENDER);

export default App
