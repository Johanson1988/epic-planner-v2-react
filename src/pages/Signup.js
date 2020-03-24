import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { withAuth } from "../lib/AuthProvider";
// import Footer from "../components/Footer";

import Email from '../components/formLabels/Email';

export default class Signup extends Component {
    state = {
        fullName: "",
        email:"",
        password:"",
        location:"",
        keywords:""
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        const { fullName, email, password, location, keywords } = this.state;
        this.props.signup( { fullName, email, password, location, keywords } ); // props.signup is Provided by withAuth() and Context API
      };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    
    render() {
        const { fullName, Email, password, location, keywords } = this.state;
        return(
            <div>
                <h1>SIGNUP</h1>

        <form onSubmit={this.handleFormSubmit}>
        <div>
          <label for="fullname">Name:</label>
          <input
            type="text"
            name="fullname"
            value={fullName}
            onChange={this.handleChange}
          />
          </div>

         <Email email={this.state.email} />

          <div>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          </div>

          <div>
          <label for="location">Location:</label>
               <select name="location" value={location} onChange={this.handleChange}>
                  <option value="">--Choose a neighbourhood--</option>
                  <option value="Sants">Sants</option>
                  <option value="Poble Nou">Poble Nou</option>
                  <option value="Barceloneta">Barceloneta</option>
               </select>
           </div>
       
        </form>
      
        <div>
          <label>Keywords:</label>
          <input
            type="keywords"
            name="keywords"
            value={keywords}
            onChange={this.handleChange}
          />
          </div>

        <p>Already have account?</p>
        <Link to={'/login'}> Login</Link>

        </div>
        )
    }
}



