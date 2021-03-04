import React from "react";
import Band from './Band'


class Like extends React.Component {

  state = {count: 0}
  incrementCounter() {
    this.setState({count: this.state.count + 1})
  }
  decrementCounter() {
    this.setState({count:this.state.count -1})
  }
  render() {    
    return (
    <div>

        <button onClick={this.incrementCounter.bind(this)}>Like</button>
        <button onClick={this.decrementCounter.bind(this)}>Dislike</button>
        <input type="text" value={this.state.count}/> 
        </div>
    );
  }
}
export default Like