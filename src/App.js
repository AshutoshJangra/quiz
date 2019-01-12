import React, { Component } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      qn: 0,
      totalScore: 0
    };
  }

  //update score
  updateScore = () => {
    let ts = this.state.totalScore;
    this.setState({ totalScore: ++ts });
  
  };

  //function for next question button (increase qn in state)
  nextQuestion = () => {
    let qn = this.state.qn;

    if (qn < 2) {
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
        <h2 className="mt0 mb0 fw3 tc pt3 f2 mid-gray">QUIZ</h2>

        <div className="counter">
          <h1 className="f2 fw3 mid-gray tc mt4 ">{this.state.totalScore}</h1>
          
        </div>
        <div className="card shadow-5 bg-white flex   ma3 mt0">
          <QuestionCard
            qn={this.state.qn}
            onNext={this.nextQuestion}
            onPrev={this.prevQuestion}
            onCorrect={this.updateScore}
          />
        </div>
      </div>
    );
  }
}

export default App;
