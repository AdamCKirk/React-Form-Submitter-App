import React from 'react';
import Skill from './skill';

export default class SkillsetDevelopment extends React.Component {
    render(){
        return (
            <div id={this.props.skillsetName}>
            <h2>{this.props.skillsetName}</h2>
                <Skill skillLevel="80" skillName="HTML" />
                <Skill skillLevel="65" skillName="CSS" />
            </div>
            
        )
    }
}