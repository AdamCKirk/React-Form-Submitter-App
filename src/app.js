

// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.sass';

// component imports
import SkillsetDevelopment from './components/skillsetDevelopment';
import SkillsetDesign from './components/skillsetDesign';
import Header from './components/header';
import Footer from './components/footer';
//import Image from './components/image'


// This is the projects titles, change to fit needs
const headerTitle = 'Form Submitter';
const footerTitle = 'I read the instructions';


// Main stage area
const stage = (
    <div id='stageArea'>
        <SkillsetDevelopment skillsetName="Development"/>
        <SkillsetDesign skillsetName="Design" />
    </div>
)

// Render elements to the html by ID
//ReactDOM.render(stage, document.getElementById('app'));
ReactDOM.render(<Header headerTitle={headerTitle} />, document.getElementById('header'))
ReactDOM.render(stage, document.getElementById('app'))
ReactDOM.render(<Footer footerTitle={footerTitle} />, document.getElementById('footer'))
