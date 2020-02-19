import React from "react"
import TodoItem from "./TodoItem"

function Todos() {

  const TodoItems = [
    {id:"1", title:"Item 1"},
    {id:"1", title:"Item 2"},
    {id:"1", title:"Item 3"},
    {id:"1", title:"Item 4"},
    {id:"1", title:"Item 5"},
    {id:"1", title:"Item 6"},
    {id:"1", title:"Item 7"}
  ];

  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
export default Todos
