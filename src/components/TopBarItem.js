import React from "react"

class TopBarItem extends React.Component {

  render(){
    return (<span><a href={this.props.href}>{this.props.id}-{this.props.title}</a>&nbsp;&nbsp;</span>)
  }
}

export default TopBarItem
