import React, {Component} from 'react';


export default class Password extends Component {
    render() {
        return (
            <div>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            value={Password}
            onChange={this.handleChange}
          />
          </div>
        )
    }
}