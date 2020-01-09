// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Modal from 'react-modal';

// component imports
import AppRouter from './routers/AppRouter';
import FormSubmitterApp from './components/FormSubmitterApp';



Modal.setAppElement('#app')

ReactDOM.render(<AppRouter /> , document.getElementById('app'));