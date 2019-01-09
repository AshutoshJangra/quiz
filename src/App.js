import React, { Component } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";
import { Questions } from "./Data/Questions";

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

 //function for next prev button (decrease qn in state)
  prevQuestion = () => {
    let qn = this.state.qn;

    if (qn > 0) {
      this.setState({ qn: --qn });
    }
  };

  //onsubmit func check ans in answer files
  submitAnswer = (event) => {
         console.log(event + "check") 
        
  }

  render() {
    return (
      <div className="App   ">
        <div className="">
          <QuestionCard
            questions={this.state.questions}
            qn={this.state.qn}
            onNext={this.nextQuestion}
            onPrev={this.prevQuestion}
            Submit = {this.submitAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;
