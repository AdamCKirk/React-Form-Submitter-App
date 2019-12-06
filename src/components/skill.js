import React from 'react';

export default class Skill extends React.Component{
    constructor(props){
        super(props)
        this.visibilityHandle = this.visibilityHandle.bind(this);
        this.state = {
            visibility: false,
        }
    }

    visibilityHandle() {
        console.log(this.props.skillName + ' clicked')
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div className="skill" onClick={this.visibilityHandle}>
                {console.log(this.props.skillName)}
                <h3>{this.props.skillName}</h3>
                <p>{this.props.skillLevel}</p>
                { 
                    this.state.visibility && <p>Skill Details</p>
                }
                
            </div>
        )
    }
}
