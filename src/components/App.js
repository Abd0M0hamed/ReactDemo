//'use strict';

import React from "react";
import ReactDOM from "react-dom";

import TopBar from "./TopBar";
import Footer from "./Footer"
import Body from "./Body"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }


  //Executed once when the component is loaded
  componentDidMount(){
    console.log("Welcome, The component is Mounted");
    this.setState({
      isLoading: false
    })
  }

  /*
  static getDerivedStateFromProps(props, state){
    // Return the new, updated state based upon the props
  }
  */

  /*
  getSnapshotBeforeUpdate(){
    // Create a backup of the current way things are
  }
  */

  // Before Component Mount (Deprecated)
  /*
  componentWillMount() {

  }
  */

  // Executed everytime component receives props (Deprecated)
  /*
  componentWillReceiveProps(nextProps){
    console.log("Component receiving Props");
  }
  */

  /*
  // If component needs to be re-rendered
  shouldComponentUpdate(nextProps, nextState){
    // We return true if we need it to update otherwise we return false
  }
  */

  // If component going to be unmounted (Used for Cleanup)
  componentWillUnmount(){
    // remove event listeners
    // Cleanup the code before component disappears
  }

  //Before Component Update (DeprecatedS)
  /*
  componentWillUpdate(){

  }
  */
  getStyles(){
    return { display: "block"}
  }

  render(){
    const styles = this.getStyles()
    return (
      <div className="app" style={styles}>
        <TopBar /><Body isLoading={this.state.isLoading} /><Footer />
      </div>
    )
  }
}
//ReachDOM.render(WHAT TO RENDER, WHERE TO RENDER);

export default App
