import React, {Component} from 'react';


export default class Keywords extends Component {
    render() {
        return (
            <div>
          <label>Keywords:</label>
          <input
            type="keywords"
            name="keywords"
            value={Keywords}
            onChange={this.handleChange}
          />
          </div>
        )
    }
}