import React from 'react' ;

const OptionCard = ({op}) => {
    return (
         <div className="flex pa2">
             <input type="checkbox" name="option1" id="option1"/><h6 className="ma0 pl2">{op}</h6>
         </div>
    );
}

export default OptionCard ;