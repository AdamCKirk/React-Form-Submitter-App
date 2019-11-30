
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {clientTitle, clientName, clientDoB} from './formPage1'
import {clientLocation, clientDaT, clientFeedback, clientSubmit} from './formPage2'



console.log(clientTitle('Mr'));
console.log(clientName('Adam'));
console.log(clientDoB('16/01/1000'));
console.log(clientLocation('Here'));
console.log(clientDaT('Now'));
console.log(clientFeedback('I love it'));
console.log(clientSubmit('Submitted'));


//const template = React.createElement('p', {}, 'here');
const template = <p>Here I am baby</p>
ReactDOM.render(template, document.getElementById('app'));