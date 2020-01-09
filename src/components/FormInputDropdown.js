import React from 'react';

const FormInputDropdown = (props) => (
    <div className="inputBasic">
        <p className="inputBasic__name">{props.name}</p>
        <select 
            id={props.valueID + "Client"}
            className="inputBasic__input"
            name={props.valueID}
            onChange={props.checkStage}
            required
        >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Mx">Mx</option>
            <option value="Miss">Miss</option>
            <option value="Master">Master</option>
        </select>
    </div>
)

export default FormInputDropdown;