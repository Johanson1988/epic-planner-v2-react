import React, {Component} from 'react';

export default class Event extends Component {

    handleChange = event => {
        this.props.sendEvent(event.target.value);
    }

    render() {
        const {name} = this.props.event;
        return(
            <div>
                <label htmlFor={name}>{name}</label>
                <input type="checkbox" name={name}  value={name} onChange={this.handleChange} />
            </div>
        )
    }
}