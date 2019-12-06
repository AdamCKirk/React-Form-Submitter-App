// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.sass'

// component imports
import Skillset from './components/skillset'
import Header from './components/header'
import Footer from './components/footer'


// This is the projects titles, change to fit needs
const headerTitle = 'Form Submitter';
const footerTitle = 'I read the instructions';


// Main stage area
const stage = (
    <div id='stageArea'>
        <Header headerTitle={headerTitle} />
        <Skillset />
    </div>
)

// Render elements to the html by ID
ReactDOM.render(stage, document.getElementById('app'));
ReactDOM.render(<Footer footerTitle={footerTitle} />, document.getElementById('footer'))
