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
        return <div id="collTitle">Other</div>;
    }
}

export default Other;