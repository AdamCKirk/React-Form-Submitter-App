// library imports
import React from 'react';

// component imports
import Footer from './Footer';
import Form from './Form';
import Header from './Header';

// This is the projects titles, change to fit needs
const title = 'Form Submitter';
const footerTitle = 'Created by Adam Miller-Kirk';

// Main stage area
export default class FormSubmitterApp extends React.Component {
    render(){
        return (
            <div>
                <Header title={title} />
                <div className="container">
                    <Form />
                </div>
                <Footer footerTitle={footerTitle} />
            </div>
            
        )
    }
}
