import './App.css';
import React, {Component} from "react";


class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }

  add() {
    this.setState({count : this.state.count+1});
  }

  minus() {
    this.setState({count : this.state.count-1});
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count:{this.state.count}</p>
        <button onClick = {this.add}>Increment</button>
        <button onClick = {this.minus}>Decrement</button>
      </div>
    )
  }
}

export default App;
