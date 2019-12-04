import React from 'react';

// This returns a form with update methods and a submit button
export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.checkDetails = this.checkDetails.bind(this);
        this.state = {
            title: '',
            name: '',
            dob: 0,
            location: '',
            dot: 0,
            feedback: '',
        }
    }

    checkDetails(event) {
        event.preventDefault();

        console.log(this.state)
        let clientTitle = document.getElementById('clientTitle').value;
        let clientName = document.getElementById('clientName').value;
        let clientDoB = document.getElementById('clientDoB').value;
        let clientLocation = document.getElementById('clientLocation').value;
        let clientDoT = document.getElementById('clientDoT').value;
        let clientFeedback = document.getElementById('clientFeedback').value;

        if(clientTitle && clientName && clientDoB){
            this.setState(() => {
                return {
                    stageOne: true
                }
            })
        }

        if(clientTitle){
            console.log('title update')
            this.setState(() => {
                return {
                    title: clientTitle
                }
            })
        }

        if(clientName){
            console.log('name update')
            this.setState(() => {
                return {
                    name: clientName
                }
            })
        }

        if(clientDoB){
            console.log('dob update')
            this.setState(() => {
                return {
                    dob: clientDoB
                }
            })
        }

        if(clientLocation){
            console.log('location update')
            this.setState(() => {
                return {
                    location: clientLocation
                }
            })
        }

        if(clientDoT){
            console.log('dot update')
            this.setState(() => {
                return {
                    dot: clientDoT
                }
            })
        }

        if(clientFeedback){
            console.log('Feedback update')
            this.setState(() => {
                return {
                    feedback: clientFeedback
                }
            })
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <p>Please fill out your information below</p>
                <br></br>
                <form action="/postedForms" method="post">
                    <select id="clientTitle" name={this.state.title} defaultValue={this.state.title}  >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mx">Mx</option>
                        <option value="Miss">Miss</option>
                        <option value="Master">Master</option>
                    </select>
                    <br></br>
                    <p>Full Name</p>
                    <input id="clientName"type="text" name={this.state.name} ></input>
                    <br></br>
                    <p>Date of Birth</p>
                    <input id="clientDoB" type="date" name={this.state.dob}  ></input>
                    <br></br>
                    <p>Your Location</p>
                    <input id="clientLocation" type="text" name={this.state.location} required ></input>
                    <br></br>
                    <p>Current Date</p>
                    <input id="clientDoT" type="date" name={this.state.dot} required ></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Any Feedback?</p>
                    <textarea  id="clientFeedback" type="text" name={this.state.feedback} cols="50" rows="10"></textarea>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button id="SubmitButton" >Submit</button>
                </form>
            </div>
        )
    }
}