import React from "react"

const TopBarItem = (props) => {
  return (
    <a href={props.href}>{props.title}</a>
  )
}

export default TopBarItem
