import React from "react"
import TodoItem from "./TodoItem"

class Todos extends React.Component {

  constructor(){
    super()
    this.state = {
      allDone: "No",
      todos: []
    }
    this.setAllDone = this.setAllDone.bind(this)
    this.setAllNotDone = this.setAllNotDone.bind(this)
    this.addItem = this.addItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getItemsCount = this.getItemsCount.bind(this)
  }

  getTodoList(){
    return this.state.todos.map(item => <TodoItem key={item.id} data={item} handleChange={this.handleChange} />)
  }

  getItemsCount(){
    return this.state.todos.length
  }
  /**
  * @parameter status boolean
  */
  setAllStatus(status){
    let statusString = (status) ? "Yes" : "No"
    this.setState({ allDone: statusString })

    this.setState((prevState) => {
      let newTodosList = prevState.todos.map((item) => {
        item.completed = status
      })
      return newTodosList

    })
  }

  setAllDone(){
    this.setAllStatus(true)
  }

  setAllNotDone() {
    this.setAllStatus(false)
  }

  handleChange(itemId){
    this.setState(prevState => {
      var updatedTodos = this.state.todos.map(todo => {
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

  addItem(){
    this.setState(prevState => {
      var newItemId = this.getItemsCount() + 1;
      let updatedTodos = prevState.todos;
      updatedTodos.push({ id:newItemId, title:"Item " + newItemId, completed: false })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    let TodoList = this.getTodoList();
    return (
      <div className="todo-list">
        {this.state.todos.length > 0 ?
          <div>
            <button onClick={this.setAllDone}>Make All Done.</button>
            <button onClick={this.setAllNotDone}>Make All Not Done.</button>
            <p>Items: {this.state.todos.length}</p>
          </div>
          : <div>No Todos, Have Fun before getting involved :)</div>
        }
        <div>
          <button onClick={this.addItem}>Add Item.</button>
        </div>
        {TodoList}
        <hr />
      </div>
    );
  }

}

export default Todos
