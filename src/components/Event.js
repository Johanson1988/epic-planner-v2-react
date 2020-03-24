import React, {Component} from 'react';

export default class Event extends Component {
    render() {
        const {name} = this.props.event;
        return(
            <div>
                <label for={name}>{name}</label>
                <input type="checkbox" name={name}  value={name} />
            </div>
        )
    }
}