import React, {Component} from 'react';


export default class Email extends Component {
    render() {
        return (
 <div>
          <label for="email">Email:</label>
          <input
            type="text"
            name="email"
            value={Email}
            onChange={this.handleChange}
          />
</div>
        )
    }
}