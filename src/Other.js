import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';


class Other extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colls: []
        };

    }

    render() {
    return (
    <div>
    <div id="collTitle">About</div>
    <div id="colIn">This app is a simple mock-up that demonstrates the back-end skills I have learnt.
    I have used an express server to handle client side requests. The server connects to a Mongo database
    where the client's shopping lists are stored. I have also added some very basic validation.
    </div>
    </div>
    );
    }
}

export default Other;