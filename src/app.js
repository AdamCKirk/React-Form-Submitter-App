// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.sass';
import Modal from 'react-modal';

// component imports
import FormSubmitterApp from './components/formSubmitterApp';
import Footer from './components/footer';


Modal.setAppElement('#app')

const footerTitle = 'I read the instructions';

// Render elements to the html by ID
ReactDOM.render(<FormSubmitterApp />, document.getElementById('app'));
ReactDOM.render(<Footer footerTitle={footerTitle}/>, document.getElementById('footer'));