import React from 'react';
import FormButton from './FormButton';
import FormInputDate from './FormInputDate';
import FormInputDropdown from './FormInputDropdown';
import FormInputText from './FormInputText';
import FormInputTextbox from './FormInputTextbox';
import FormTitle from './FormTitle';


// This returns a form shell, it pulls in form components if needed
export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.checkStage = this.checkStage.bind(this);
        this.state = {
            stageOne: false,
        }
    }

    checkStage() {
        console.log(this.state.stageOne)
        console.log(nameClient.value)
        if(!!titleClient.value & !!nameClient.value & !!dobClient.value){
            this.setState(() => {
                return {
                    stageOne: true
                }
            })
        }
    };

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
            </div>
        )
    }
};
