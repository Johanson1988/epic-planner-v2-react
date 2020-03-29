import React, {Component} from 'react';

import shortid from 'shortid';
import Event from './Event';


export default class DisplayEvents extends Component {
    state = {
        dayplanName : "",
        selectedEvents: []
    }

    getSelectedEvents = event => {
        console.log(event);
        this.setState(state => {
            if (event.action === 'add') {
                const selectedEvents = [...state.selectedEvents, event.eventId];
                return {selectedEvents};
            }else {
                const {selectedEvents} = state;
                const index = selectedEvents.findIndex(selectedEvent => event.eventId === selectedEvent);
                selectedEvents.splice(index,1);
                return {selectedEvents};
            }
        });
    } 

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const events = [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}];
        const {dayplanName} = this.state;
        const {selectedEvents} = this.state;
        return(
            <div>
                <form>
                    <label htmlFor="dayplanName">Day plan Name:</label>
                    <input type="text" name="dayplanName" value={dayplanName} onChange={this.handleChange} />
                    {
                        events.map(event => selectedEvents.includes(event.name) ?
                            <Event key={shortid.generate()} event={event} sendEvent={this.getSelectedEvents} checked={true} /> :
                            <Event key={shortid.generate()} event={event} sendEvent={this.getSelectedEvents} checked={false}/>
                        )
                    }
                    <button>Save Dayplan</button>
                </form>
            </div>
        )
    }
}