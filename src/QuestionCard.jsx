import React from 'react' ;

const QuestionCard = ({questions , qn , onNext , onPrev}) => {
    
    console.log(questions[0]); 


    
    return (
        <div className=" w-40 bg-moon-gray pa3">
            <h5>{questions[qn].q1}</h5>
            
            <div className="flex pa2">
            <input type="checkbox" name="option1" id="option1"/><h6 className="ma0 pl2">{questions[qn].op1}</h6>
            </div>
            <div className="flex pa2">
            <input type="checkbox" name="option2" id="option2"/><h6 className="ma0 pl2">{questions[qn].op2}</h6>
            </div>
            <div className="flex pa2">
            <input type="checkbox" name="option3" id="option3"/><h6 className="ma0 pl2">{questions[qn].op3}</h6>
            </div>
            <div className="flex pa2">
            <input type="checkbox" name="option4" id="option4"/><h6 className="ma0 pl2">{questions[qn].op4}</h6>
            </div>
            
            <div className="pa2">
                <button className="bn bg-gray white w3 h2 f6 ma1" 
                        onClick={onPrev}>Previous 
                </button  >
                <button className="bn bg-gray white w3 h2 f6 ma1" 
                        onClick={onNext}> Next
                </button>
                <button className="bn bg-gray white w3 h2 f6 ma1">Submit</button>
            </div>
        </div>

    );

}

export default QuestionCard;