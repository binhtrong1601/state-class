import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      student: {
        name: "123",
      },
    };
    this.clickCounter = this.clickCounter.bind(this); //bind là truyền cho nó 1 đối tượng,
    console.log("init");
  }

  componentWillMount() {
    console.log("willmount");
  }

  componentDidMount() {
    console.log("mounted");
  }

  clickCounter() {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.clickCounter}>Clickme</button>
      </div>
    );
  }
}
export default Counter;
