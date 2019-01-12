import React, { Component } from "react";
import Checkbox from "./Checkbox";
import './App.css';
import { Questions } from "./Data/Questions";
import { Answers } from "./Data/Answers";
import icon from "./icons8-ok-30.png";

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: Questions[this.props.qn].op.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      ),
      isright: false
    };
  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  //on clicking the submit button
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        //check if ans is right
        if (checkbox === null) {
          console.log("sdds");
        }
        if (checkbox === Answers[this.props.qn]) {
          this.setState({ isright: true });
        } else {
          console.log("Answer is wrong");

          this.setState({ isright: false });
        }
      });

    //set the state to default false
  };

  //creating the checkbox
  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => Questions[this.props.qn].op.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {/*display questions */}
              <div className="ques tc pl2 f3  ">
                <h4 className="mt0 pt3 dark-gray mb3">
                  {Questions[this.props.qn].q}
                </h4>
              </div>

              {/*Display checkBox */}
              {this.createCheckboxes()}

              {/*Display result (p tag) if ans is right} */}
              <div className="disp-ans flex">
                {this.state.isright ? (
                  <div className=" dark-gray mt3 flex ml2">
                    <img className="tick" alt="imG" src={icon} />
                    <p className="f5 mt1 mb0 ">Right Answer</p>
                  </div>
                ) : (
                  <p className="f5 tc dark-gray ml2">
                    Select a Option and click submit
                  </p>
                )}
              </div>

              {/* display buttons */}
              <div className="form-group flex justify-around mt2">
                <button
                  onClick={this.props.onPrev}
                  className="w3 h2 f6 bn bg-mid-gray ma1  white"
                >
                  Previous
                </button>

                <button
                  type="submit"
                  className="w3 h2 f6 bn bg-mid-gray ma1  white"
                >
                  Submit
                </button>

                <button
                  onClick={this.props.onNext}
                  className="w3 h2 f6 bn bg-mid-gray ma1  white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
