import React from "react";
import OptionCard from "./OptionCard";

const QuestionCard = ({ questions, qn, onNext, onPrev, Submit }) => {
  return (
    <div className=" w-30 bg-moon-gray pa3">
      <h5>{questions[qn].q1}</h5>
       
       
      {questions[qn].op.map(
        o => (
          <OptionCard key={o} op={o} />
        )

        // console.log(o)
      )}

      <div className="pa2">
        <button className="bn bg-gray white w3 h2 f6 ma1" onClick={onPrev}>
          Previous
        </button>
        <button className="bn bg-gray white w3 h2 f6 ma1" onClick={onNext}>
          {" "}
          Next
        </button>
        <button className="bn bg-gray white w3 h2 f6 ma1" onSubmit={Submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
