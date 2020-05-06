import React, {Component} from 'react';
import shortid from 'shortid';


class EditDayplan extends Component {

    state = {
        name: null,
        date: null,
        events: new Map(),
    };

    handleSubmit = e => {
        e.preventDefault();
        //this.props.editDayplan(this.state)
        console.log(this.state);
    }

    handleChangeCheckbox = (e) => {
        const event = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ events: prevState.events.set(event, isChecked) }));
      }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    render = () => {

        const eventList = [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}];

        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Dayplan Name:</label>
            <input type="text" name="name" placeholder="NOMBRE DAYPLAN" onChange={this.handleChange} />
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" onChange={this.handleChange}/>
            <h3 htmlFor="events">Pick your events:</h3>
            {
                eventList.map(event => <div key={shortid.generate()}><label>{event.name}</label><input type="checkbox" name={event.name}  value={event.name} onChange={this.handleChangeCheckbox} checked={this.state.events.get(event.name)} /></div> )
            }
            <button>Save</button>
        </form>
        )

    }
}

export default EditDayplan;