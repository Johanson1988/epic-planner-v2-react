import React, {Component} from 'react';

import Footer from './../components/Footer';
import DisplayEvents from './../components/DisplayEvents';

export default class CreateDayplan extends Component {
    render() {
        return(
            <div>
                <h1>Navbar</h1>
                <DisplayEvents />
                <Footer />            
            </div>
        )
    }
}