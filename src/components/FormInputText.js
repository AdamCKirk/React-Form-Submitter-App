import React from 'react';

const FormInputText = (props) => (
    <div className="inputBasic">
        <p className="inputBasic__name">{props.name}</p>
        <input className="inputBasic__input" type="text" name={props.valueID} onChange={props.checkStage} required/>
    </div>
)

export default FormInputText;