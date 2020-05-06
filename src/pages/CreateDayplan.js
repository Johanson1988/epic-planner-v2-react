import React, {Component} from 'react';

import Footer from './../components/Footer';
import EditDayplan from './../components/dayplan/EditDayPlan';


export default class CreateDayplan extends Component {
    render() {
/*
   UI components
   form
      name
      fecha
      seleccionar eventos + info


*/

        return(
            <div>
                <h1>Navbar</h1>
                <EditDayplan />
                <Footer />            
            </div>
        )
    }
}