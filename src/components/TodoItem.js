import React from "react"

function TodoItem(props) {
  return (
    <div className="todo-element">
      <input type="checkbox" checked={props.data.completed}/>
      <p>{props.data.id} - {props.data.title}</p>
    </div>
  );
}
export default TodoItem
