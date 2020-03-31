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

    handleSubmit = event => {
        event.preventDefault();
        const {dayplanName, selectedEvents} = this.state;
        // eslint-disable-next-line
        if (dayplanName, selectedEvents) {
            const newDayPlan = {dayplanName, selectedEvents};
            fetch('http://192.168.1.134:2224/dayplan', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDayPlan),
                })
                .then((response) => response.json())
                .then((data) => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
        }
        else this.setState({errorMessage:'You must add an event name and select at least 1 event to create a dayplan'});
    }

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
                    <button onClick={this.handleSubmit}>Save Dayplan</button>
                </form>
            </div>
        )
    }
}