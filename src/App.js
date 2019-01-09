import React, { Component } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";
import { Questions } from "./Questions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: Questions,
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

  prevQuestion = () => {
    let qn = this.state.qn;

    if (qn > 0) {
      this.setState({ qn: --qn });
    }
  };

  render() {
    return (
      <div className="App   ">
        <div className="">
          <QuestionCard
            questions={this.state.questions}
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
