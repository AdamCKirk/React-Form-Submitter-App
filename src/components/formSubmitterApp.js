// library imports
import React from 'react';

// component imports
import Footer from './Footer';
import Form from './Form';
import Header from './Header';



// Main stage area
export default class FormSubmitterApp extends React.Component {
    render(){
        return (
            <div className="container">
                <Form />
            </div>
        )
    }
}
