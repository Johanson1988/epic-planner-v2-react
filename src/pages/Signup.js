import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { withAuth } from "../lib/AuthProvider";
// import Footer from "../components/Footer";


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
        const { fullName, email, password, location, keywords } = this.state;
        return(
            <div>
                <h1>SIGNUP</h1>

        <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="fullname"
            value={fullName}
            onChange={this.handleChange}
          />
          </div>

          <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          </div>

          <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          </div>
{/*     */}
          <div>
          <label>Location:</label>
               <select id="location" onChange={this.handleChange} value={this.state.value}>
                  <option value="Sants">Sants</option>
                  <option value="Barceloneta">Barceloneta</option>
                  <option value="Poble Nou">Poble Nou</option>
               </select>
               <p></p>
               <p>{this.state.value}</p>
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



