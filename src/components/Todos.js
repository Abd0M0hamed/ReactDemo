import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

class Todos extends React.Component {

  getTodoList(){
    return TodosData.map(item => <TodoItem key={item.id} data={item} />)
  }

  render(){
    const TodoList = this.getTodoList();
    return (
      <div className="todo-list">
        {TodoList}
      </div>
    );
  }
}

export default Todos
