import React from "react"

class TodoItem extends React.Component {

  render(){
    return (
      <div className="todo-element">
        <input type="checkbox" checked={this.props.data.completed} onChange={() => this.props.handleUpdate(this.props.data.id)}/>
        <p>{this.props.data.id} - {this.props.data.title}</p>
      </div>
    );
  }

}

export default TodoItem
