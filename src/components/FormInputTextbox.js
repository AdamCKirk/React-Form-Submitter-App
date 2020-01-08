import React from 'react';

const FormInputTextbox = (props) => (
    <div className="inputFeedback">
        <p className="inputFeedback__name">{props.name}</p>
        <textarea  className="inputFeedback__input" type="text" name={props.valueID}></textarea>
    </div>
    
)

export default FormInputTextbox;