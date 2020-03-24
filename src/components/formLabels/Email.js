import React, {Component} from 'react';


export default class UserEmail extends Component {
    render() {
        return (
 <div>
          <label for="Email">Email:</label>
          <input
            type="text"
            name="email"
            value={UserEmail}
            onChange={this.handleChange}
          />
</div>
        )
    }
}