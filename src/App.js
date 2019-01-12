import React, { Component } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      qn: 0
    };
  }

  //function for next question button (increase qn in state)
  nextQuestion = () => {
    let qn = this.state.qn;

    if (qn < 1) {
      this.setState({ qn: ++qn });
    }
  };

  //function for next prev button (decrease qn in state)
  prevQuestion = () => {
    let qn = this.state.qn;

    if (qn > 0) {
      this.setState({ qn: --qn });
    }
  };

  render() {
    return (
      <div className="App   ">
        <div className="card-space">
        </div>
        <div className="card shadow-5 bg-white flex tc  ma3 mt0">
          <QuestionCard
            qn={this.state.qn}
            onNext={this.nextQuestion}
            onPrev={this.prevQuestion}
          />
        </div>
      </div>
    );
  }
}

export default App;
