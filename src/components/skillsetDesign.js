import React from 'react';
import Skill from './skill';

export default class SkillsetDesign extends React.Component {
    render(){
        return (
            <div id={this.props.skillsetName}>
            <h2>{this.props.skillsetName}</h2>
                <Skill skillLevel="85" skillName="Adobe Photoshop" />
                <Skill skillLevel="90" skillName="Adobe Illustrator" />
            </div>
            
        )
    }
}