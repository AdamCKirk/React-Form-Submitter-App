import React from 'react';
import Thanks from './Thanks'
import FormTextBox from './FormTextBox';


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
            stageOne: true,
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
                    <p>Full Name <input id="clientName" type="text" name="name" onChange={this.checkStage} required ></input></p>
                    <p>Date of Birth <input id="clientDoB" type="date" name="dob" onChange={this.checkStage} required ></input></p>
                    {
                        this.state.stageOne && (
                            <div>
                            <p>Your Location <input id="clientLocation" type="text" name="location" required ></input></p>
                            <p>Current Date <input id="clientDoT" type="date" name="dot" required ></input></p>
                            <p className="feedback">Any Feedback?</p>
                            <FormTextBox />
                            <button>Submit</button>
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
//<button id="SubmitButton" onClick={this.handleFormSubmit}>Submit</button>