import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

class Todos extends React.Component {

  constructor(){
    super()
    this.state = {
      allDone: "No",
      counter: 0,
      todos: TodosData
    }
    this.setAllDone = this.setAllDone.bind(this)
    this.setAllNotDone = this.setAllNotDone.bind(this)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  getTodoList(){
    return TodosData.map(item => <TodoItem key={item.id} data={item} handleUpdate={this.handleUpdate} />)
  }

  setAllDone(){
    this.setState({ allDone: "Yes" })
    // OR
    /*this.setState(prevState => {
      return "Hii"
    })*/
  }

  setAllNotDone() {
    this.setState({ allDone: "No" })
  }

  handleUpdate(itemId){
    this.setState(prevState => {

      const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === itemId) {
            todo.completed = !todo.completed
          }
          return todo
      })

      // OR
      // const updatedTodos = prevState.todos
      // updatedTodos[itemId-1].completed = !updatedTodos[itemId-1].completed

      return {
        todos: updatedTodos
      }
    })

  }

  incrementCounter(){

    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })

  }

  render(){
    const TodoList = this.getTodoList();
    return (
      <div className="todo-list">
        <div>All Done? <span style={{color: "red", fontWeight: "bold"}}>{this.state.allDone}</span></div>
        <div>
          <button onClick={this.setAllDone}>Make All Done.</button>
          <button onClick={this.setAllNotDone}>Make All Not Done.</button>
        </div>
        <div>
          <p>{this.state.counter}</p>
          <button onClick={this.incrementCounter}>Increment.</button>
        </div>
        {TodoList}
        <hr />
      </div>
    );
  }

}

export default Todos
