import React from 'react';
import Modal from 'react-modal';

const Thankyou = (props) => (
    <div>
    <Modal
        isOpen={!!props.formSubmitted}
        onRequestClose={props.handleClearThanks}
        contentLabel="formSubmitted"

    >
        <h3>Thanks for filling out the form</h3>
        <button onClick={props.handleClearThanks}>Ok</button>
    </Modal>
    </div>
);

export default Thankyou;
