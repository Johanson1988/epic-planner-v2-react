import React, {Component} from 'react';

export default class Event extends Component {

    handleChange = event => {
        console.log("event checked: ", event.target.checked);
        event.target.checked ?
        this.props.sendEvent({eventId: event.target.name, action: 'add'}) :
        this.props.sendEvent({eventId: event.target.name, action: 'remove'});
    }

    render() {
        const {name} = this.props.event;


        return(
            <div>
                <label htmlFor={name}>{name}</label>
                <input type="checkbox" name={name}  value={name} onChange={this.handleChange} checked={this.props.checked} /> :
                    
            </div>
        )
    }
}