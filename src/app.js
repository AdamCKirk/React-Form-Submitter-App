// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Modal from 'react-modal';

// component imports
import FormSubmitterApp from './components/FormSubmitterApp';


Modal.setAppElement('#app')



// Render elements to the html by ID
ReactDOM.render(<FormSubmitterApp />, document.getElementById('app'));
//ReactDOM.render(<Footer footerTitle={footerTitle}/>, document.getElementById('footer'));