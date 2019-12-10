// library imports
import React from 'react';

// component imports
import Form from './form';
import Header from './header';


// This is the projects titles, change to fit needs
const headerTitle = 'Form Submitter';



// Main stage area
export default class FormSubmitterApp extends React.Component {
    render(){
        return (
            <div id='stageArea'>
                <Header headerTitle={headerTitle} />
                <Form />
            </div>
        )
    }
}
