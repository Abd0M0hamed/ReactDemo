import React from "react"

class TopBarItem extends React.Component {
  render(){
    return (<a href={this.props.href}>{this.props.title}</a>)
  }
}

export default TopBarItem
