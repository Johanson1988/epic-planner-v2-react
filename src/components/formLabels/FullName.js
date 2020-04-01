import React, {Component} from 'react';


export default class FullName extends Component {
    render() {
        return (
            <div>
            <label for="fullname">Name:</label>
            <input
              type="text"
              name="fullname"
              value={FullName}
              onChange={this.handleChange}
            />
            </div>
        )
    }
}