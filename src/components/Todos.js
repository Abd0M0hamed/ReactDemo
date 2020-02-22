import React from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

class Todos extends React.Component {

  constructor(){
    super()
    this.state = {
      allDone: "No",
      counter: 0
    }
    this.setAllDone = this.setAllDone.bind(this)
    this.setAllNotDone = this.setAllNotDone.bind(this)
  }

  getTodoList(){
    return TodosData.map(item => <TodoItem key={item.id} data={item} />)
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
