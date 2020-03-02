import React from "react"

class RemoteCaller extends React.Component {

  constructor(){
    super()
    this.state = {
      data : null,
      isLoading: true
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data, isLoading: false })
      })
  }

  render(){
    if(this.state.isLoading){
      return (<h2>Loading ...</h2>)
    }

    return (
      <div style={{ textAlign: 'left', margin: '20px auto', maxWidth: '300px' }}>
        <h2>Remote Retrieved Data:</h2>
        <div><b>User ID:</b> {this.state.data.userId}</div>
        <div><b>ID:</b> {this.state.data.id}</div>
        <div><b>Title:</b> {this.state.data.title}</div>
        <div><b>Completed:</b> {this.state.data.completed}</div>
      </div>
    )
  }
}

export default RemoteCaller
