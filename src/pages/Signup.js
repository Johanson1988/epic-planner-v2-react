import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { withAuth } from "../lib/AuthProvider";
// import Footer from "../components/Footer";

// Form label components 
import Email from '../components/formLabels/Email';
import FullName from '../components/formLabels/FullName';
import Password from '../components/formLabels/Password';
import Location from '../components/formLabels/Location';
import Keywords from '../components/formLabels/Keywords';


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

        <FullName fullName={fullName}/>

        <Email email={email}/>

        <Password password={Password}/>
      
        <Location location={Location}/>
       
        </form>
      
        <Keywords keywords={Keywords}/>
          
        <p>Already have account?</p>
        <Link to={'/login'}> Login</Link>

        </div>
        )
    }
}



