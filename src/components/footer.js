import React from 'react';

// This returns a p element for the footer of the app
export default class Footer extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.footerTitle}</p>
            </div>
        )
    }
}
