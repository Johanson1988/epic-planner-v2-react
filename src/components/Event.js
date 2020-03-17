import React, {Component} from 'react';

export default class Event extends Component {
    render() {
        const {name} = this.props.event;
        return(
            <div>
                <p>{name}</p>
            </div>
        )
    }
}