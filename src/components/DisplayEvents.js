import React, {Component} from 'react';

import shortid from 'shortid';
import Event from './Event';


export default class DisplayEvents extends Component {
    render() {
        const events = [{name:'event1'},{name:'event2'},{name:'event3'},{name:'event4'}]
        return(
            <div>
                <form>
                    <label for="dayplan-name">Day plan Name: </label>
                    <input type="text" name="dayplan-name" value="" />
                    {
                        events.map(event => <Event key={shortid.generate()} event={event} />)
                    }

                    <button>Save Dayplan</button>
                </form>
            </div>
        )
    }
}