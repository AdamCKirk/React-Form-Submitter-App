import React from 'react';

// This returns a h1 element to be used as the header of the app
export default class Header extends React.Component{
    render(){
        return (
            <div id="headerArea">
                <h1>{this.props.headerTitle}</h1>   
            </div>
        )
    }
}
