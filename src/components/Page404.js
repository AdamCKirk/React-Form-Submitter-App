import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
    <div className="container">
        <div className="page404">
            <h4 className="page404__title" >404</h4>
            <p className="page404__description">This isn't the page you are looking for</p>
            <Link className="page404__tab" to="/" >Return To Form</Link>
        </div>
    </div>
);

export default Page404;