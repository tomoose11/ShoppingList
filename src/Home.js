import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Link} from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colls: []
        };

    }

    componentDidMount() {
        this.colfet();
    }

    colfet() {
        fetch("/get")
        .then(d=>d.json())
        .then((da)=>{
            //alert(da[0].name);

             
                if(da.length < 2) {
                    alert("You don't have any lists!! \nPlease click on the New Lists button");
                }
            

            var collList = da.map((a)=>{
                if(a.name != 'system.indexes') {
                return <div>
                <Link to={"/MyList/"+a.name}><div id="collLis">{a.name}</div></Link>
                <div class="delBut" onClick={()=>this.getCol(a.name)}>Delete</div>
            </div>}});

            this.setState({
                colls: collList
            });
        });
    }

    getCol(a) {
        if(window.confirm("Delete "+a +"?")){
        fetch('/deletecol/'+a);
        setTimeout(()=>{
            this.colfet();
        },100);
    }
    }

    render() {
    return (
        <div>
        <div id="collTitle">My Lists</div>
        <div id="colIn">-Click on a list to see the items it contains</div>
        <div id="colIn">-Click on New List to create a new list</div>
        <div id="collLisWrap">
        <div>{this.state.colls}</div>
        </div>
        </div>
    );
    }
}

export default Home;