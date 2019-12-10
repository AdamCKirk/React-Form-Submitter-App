import React from 'react';
import Thanks from './thanks'

// This returns a form with update methods and a submit button
export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.checkStage = this.checkStage.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearThanks = this.handleClearThanks.bind(this);
        this.state = {
            title: '',
            name: '',
            dob: 0,
            location: '',
            dot: 0,
            feedback: '',
            stageOne: false,
            formSubmitted:  false
        }
    }

    checkStage() {
        console.log(this.state.stageOne)
        if(!!clientTitle.value & !!clientName.value & !!clientDoB.value){
            this.setState(() => {
                return {
                    stageOne: true
                }
            })
        }
    };

    handleFormSubmit(e){
        e.preventDefault();
        console.log('clicked')
        console.log(this.state.formSubmitted)
        this.setState(() => ({
            formSubmitted: true
        }))
    };

    handleClearThanks(){
        console.log('clear')
        this.setState(() => ({
            formSubmitted: false
        }))
    }

    render() {
        return (
            <div>
                <br></br>
                <h4>Please fill out your information below</h4>

                <form action="/postedForms" method="post">
                    <p>Title <select id="clientTitle" name="title" onChange={this.checkStage} required >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mx">Mx</option>
                        <option value="Miss">Miss</option>
                        <option value="Master">Master</option>
                    </select>
                    </p>
                    <br></br>
                    <p>Full Name <input id="clientName" type="text" name="name" onChange={this.checkStage} required ></input></p>
                    <br></br>
                    <p>Date of Birth <input id="clientDoB" type="date" name="dob" onChange={this.checkStage} required ></input></p>
                    <br></br>
                    {
                        this.state.stageOne && (
                            <div>
                            <p>Your Location <input id="clientLocation" type="text" name="location" required ></input></p>
                            <br></br>
                            <p>Current Date <input id="clientDoT" type="date" name="dot" required ></input></p>
                            <br></br>
                            <p className="feedback">Any Feedback?</p>
                            <textarea  id="clientFeedback" type="text" name="feedback" cols="50" rows="6"></textarea>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button id="SubmitButton" onClick={this.handleFormSubmit}>Submit</button>
                        </div>
                        )
                    }
                </form>
                <Thanks 
                    formSubmitted={this.state.formSubmitted}
                    handleClearThanks={this.handleClearThanks}
                />
            </div>
        )
    }
}
//<form action="/postedForms" method="post">