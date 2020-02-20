import React from "react";
import TopBarItem from "./TopBarItem"

const TopBar = () => {
  const barElements = [
    {title: "Home", href: "#home"},
    {title: "Projects", href: "#projects"},
    {title: "Contact Us", href: "#contact-us"},
    {title: "About Us", href: "#about-us"},
  ]
  return (
      <div className="top-bar">
        <span>LOGO</span> &nbsp;&nbsp;&nbsp;

          <TopBarItem
            title="Home"
            href="#home"
          />&nbsp;:&nbsp;

          <TopBarItem
            title="Projects"
            href="#projects"
          />&nbsp;:&nbsp;

          <TopBarItem
            title="Contact Us"
            href="#contact-us"
          />&nbsp;:&nbsp;

          <TopBarItem
            title="About Us"
            href="#about-us"
          />

      </div>
  )
}

export default TopBar
