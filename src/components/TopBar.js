import React from "react";
import TopBarItem from "./TopBarItem"

class TopBar extends React.Component {

  getBarElements(){
    return [
      {title: "Home", href: "#home"},
      {title: "Projects", href: "#projects"},
      {title: "Contact Us", href: "#contact-us"},
      {title: "About Us", href: "#about-us"},
    ]
  }

  renderBarElements(){
    return this.getBarElements().map(item => {
      return (<TopBarItem title={item.title} href={item.href} />)
    })
  }

  render(){
    const barElements = this.renderBarElements();
    return (
        <div className="top-bar">
          <span>LOGO</span> &nbsp;&nbsp;&nbsp;
            {barElements}
        </div>
    )
  }

}

export default TopBar
