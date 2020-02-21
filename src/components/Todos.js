import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

function Todos() {

  const TodoList = TodosData.map(item => {
    return <TodoItem key={item.id} data={item} />
  })

  return (
    <div className="todo-list">
      {TodoList}
    </div>
  );
}
export default Todos
