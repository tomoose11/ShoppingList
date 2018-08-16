import React, { Component } from 'react';
import logo from './logo.svg';
import {Route,Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import NewList from './NewList.js';
import Home from './Home.js';
import Other from './Other.js';
import MyList from './MyList.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: 55
        };
    }

    componentDidMount () {
        //alert(this.state.info);
        fetch("/get")
        .then(d=>d.json())
        .then((da)=>{
            //alert(da[0].name);
        });
    }
  render() {
    return (
      <div id="cont">
            <div></div>
            <div id="navBar">
                <div id="title">Shopping List</div>
            </div>
            <div id="navBar2">
                <div className="navBut">Favorites</div>
                <Link to="/other"><div className="navBut">About</div> </Link> 
                <Link to="/NewList"><div className="navBut">New Lists</div> </Link>
                <Link to="/"><div className="navBut">Home</div> </Link>     
            </div>
            <Route path="/" exact component={Home}/>
            <Route path="/NewList" component={NewList}/>
            <Route path="/other" component={Other}/>
            <Route path="/MyList/:id" component={MyList}/>
        </div>
    );
  }
}

export default App;
