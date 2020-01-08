import React from 'react';
import Thanks from './Thanks'
import FormButton from './FormButton';
import FormInputDate from './FormInputDate';
import FormInputDropdown from './FormInputDropdown';
import FormInputText from './FormInputText';
import FormInputTextbox from './FormInputTextbox';
import FormTitle from './FormTitle';


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
        if(!!this.state.title & !!this.state.name & !!this.state.dob){
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
                <form action="/postedForms" method="post">
                    <FormTitle />
                    <FormInputDropdown name={"Title:"} valueID={"title"} checkStage={this.checkStage}/>
                    <FormInputText name={"Full Name:"} valueID={"name"} checkStage={this.checkStage}/>
                    <FormInputDate name={"Date:"} valueID={"dob"} checkStage={this.checkStage}/>
                    {
                        this.state.stageOne && (
                            <div>
                            <FormInputText name={"Your Location:"} valueID={"location"} />
                            <FormInputDate name={"Today:"} valueID={"dot"} />
                            <FormInputTextbox name={"Feedback:"} valueID={"feedback"}  />
                            <FormButton />
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
//<button id="SubmitButton" onClick={this.handleFormSubmit}>Submit</button>
