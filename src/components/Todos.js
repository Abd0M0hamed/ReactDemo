import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

class Todos extends React.Component {

  constructor(){
    super()
    this.state = {
      allDone: "No"
    }
  }
  
  getTodoList(){
    return TodosData.map(item => <TodoItem key={item.id} data={item} />)
  }

  render(){
    const TodoList = this.getTodoList();
    return (
      <div className="todo-list">
        <div>All Done? {this.state.allDone}</div>
        {TodoList}
        <div>
          <button>Mall All Done.</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Todos
