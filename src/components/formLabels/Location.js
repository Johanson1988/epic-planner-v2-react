import React, {Component} from 'react';


export default class Location extends Component {
    render() {
        return (
            <div>
          <label for="location">Location:</label>
               <select name="location" value={Location} onChange={this.handleChange}>
                  <option value="">--Choose a neighbourhood--</option>
                  <option value="Sants">Sants</option>
                  <option value="Poble Nou">Poble Nou</option>
                  <option value="Barceloneta">Barceloneta</option>
               </select>
           </div>
        )
    }
}