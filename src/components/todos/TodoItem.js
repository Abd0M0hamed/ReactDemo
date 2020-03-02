import React from "react"

class TodoItem extends React.Component {

  getElementStyles(elementStatus){
    return elementStatus ? {
      textDecoration: 'line-through',
      color: 'green',
      fontStyle: 'italic'
    } :
    {
      color: '#000'
    }
  }

  getRemoveIconStyles(){
    return {
      color:'red',
      margin: '0px 20px',
      fontWeight:'bold',
      fontSize:'9px',
      cursor: 'pointer'
    }
  }

  render(){
    let elementStyles = this.getElementStyles(this.props.data.completed);
    return (
      <div className="todo-element">
        <input type="checkbox" checked={this.props.data.completed} onChange={() => this.props.handleChange(this.props.data.id)}/>
        <p style={elementStyles}>{this.props.data.id} - {this.props.data.title}
          <span onClick={() => this.props.handleRemove(this.props.data.id)} style={this.getRemoveIconStyles()}>X</span>
        </p>
      </div>
    );
  }

}

export default TodoItem
