import React from 'react';

const FormInputDate = (props) => (
    <div className="inputBasic">
        <p className="inputBasic__name">{props.name}</p>
        <input
            id={props.valueID + "Client"}
            className="inputBasic__input"
            type="date" name={props.valueID}
            onChange={props.checkStage}
            required
        />
    </div>
)

export default FormInputDate;