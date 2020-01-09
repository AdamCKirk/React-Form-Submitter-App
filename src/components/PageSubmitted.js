import React from 'react';
import { Link } from 'react-router-dom';

const PageSubmitted = () => (
    <div className="container">
        <div className="pageSubmitted">
            <h4 className="pageSubmitted__title" >Thanks!</h4>
            <p className="pageSubmitted__description">
                You are now finished. You may close the page or click the button and start again.
            </p>
            <Link className="pageSubmitted__tab" to="/" >Return To Form</Link>
        </div>
    </div>
);

export default PageSubmitted;