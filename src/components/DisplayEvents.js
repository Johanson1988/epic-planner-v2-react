import React, {Component} from 'react';

import shortid from 'shortid';
import Event from './Event';


export default class DisplayEvents extends Component {
    state = {
        dayplanName : "",
        events: []
    }

    getSelectedEvents = event => {
        console.log(event);
    } 

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const events = [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}];
        const {dayplanName} = this.state;
        return(
            <div>
                <form>
                    <label for="dayplanName">Day plan Name:</label>
                    <input type="text" name="dayplanName" value={dayplanName} onChange={this.handleChange} sendEvent={this.getSelectedEvents} />
                    {
                        events.map(event => <Event key={shortid.generate()} event={event} />)
                    }
                    <button>Save Dayplan</button>
                </form>
            </div>
        )
    }
}