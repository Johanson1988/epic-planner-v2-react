import React, {Component} from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';
import Event from './Event';


class DisplayEvents extends Component {
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

    handleClick = () => {
        this.props.addEvent('test');
        //this.props.history.push('/');
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
            fetch(process.env.REACT_APP_API_URL + '/dayplan', {
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
        console.log(this.props);
        const events = [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}];
        const {dayplanName} = this.state;
        const {selectedEvents} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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
                <button onClick={this.handleClick}>Test</button>    
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEvent: id => { dispatch({type: 'ADD_EVENT', id: id})}
    }
};

export default connect(null, mapDispatchToProps)(DisplayEvents)