import React from "react"

class TodoItem extends React.Component {

  getElementStyles(elementStatus){
    return elementStatus ? {
      textDecoration: 'line-through',
      color: 'green',
      fontStyle: 'italic'
    } :
    {
      color: 'red'
    }
  }

  render(){
    let elementStyles = this.getElementStyles(this.props.data.completed);
    return (
      <div className="todo-element">
        <input type="checkbox" checked={this.props.data.completed} onChange={() => this.props.handleChange(this.props.data.id)}/>
        <p style={elementStyles}>{this.props.data.id} - {this.props.data.title}</p>
      </div>
    );
  }

}

export default TodoItem
