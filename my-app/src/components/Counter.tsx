import React, { Component } from 'react';

// Define the state interface
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  // Initialize the state with a default value
  state: CounterState = {
    count: 0
  };

  // Define the method with proper type annotation
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method must return JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
