import React from "react";
class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        name: "john",
        age: 10,
      },
    };
    this.clickCounter = this.clickCounter.bind(this);
  }

  clickCounter() {
    this.setState({
      ...this.state,
      student: {
        ...this.state,
        age: this.state.student.age + 1,
        hello: console.log(this),
      },
    });
  }

  render() {
    return (
      <div>
        <p>
          Hello! I'm {this.state.student.name}. I'm {this.state.student.age}{" "}
          years old.
        </p>
        <button onClick={this.clickCounter}>Increase age</button>
      </div>
    );
  }
}
export default Student;
