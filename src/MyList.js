import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

var arr3 = [];

class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            stuff: [],
            ind: 0,
            val:false
        };
        this.del = this.del.bind(this);
    }

    componentDidMount() {
        this.fet();
        
    }

    fet() {
        fetch("/newList/list/"+this.props.match.params.id)
        .then(d=>d.json())
        .then((da)=>{
            
            var p = da.map((item,a)=>
        <div onClick={()=>this.del(item._id)}>{item._id}</div>);

        let arr2 = [];

        //if (!Array.isArray(arr2) || !arr2.length) {
           // alert("hi");
          //} 

        var index = 0;

        //for(var i = 0; i < da.length+1; i++) {
            if(da.length < 1) {
                //alert("hi");
                this.setState({
                   item: [] 
                });
            }
            //arr2.push(<div key={66} onClick={this.del.bind(this,da[i].item)}>{da[i]._id}</div>);
            //alert(da);
            var newArr = arr2;
            index +=1;
            this.setState({
                item: da,
                stuff: arr2,
                ind: index     
            });
           
            
        //}

       

        

        
            
            
        });
    }

clickUpdate() {
        
        //fetch("/newList/list")
        //.then(d=>d.json())
        //.then((da)=>{
           // var arr = [];

           // var idarr = da.map((a)=>{
                //return a._id;
           // });

            //for(var i = 0; i < da.length; i ++) {
                // arr.push(
                    //<div>
                    //<div>{da[i]._id}</div>
                    //<div id="listItem" key={77}>{da[i].item}</div>
                    //<button onClick={this.del}>test</button>
                    //</div>);
                    //}
                   
            
            //this.setState({
               // data: arr
            //});
        //});
        //alert("2EEE");
        //this.fet();
    }

    del(e) {
        var kk = Object.keys(e)[0];
        if(window.confirm("Are you sure you want to delete this item?")) {

        setTimeout(()=>{
            fetch('/newList/delete/'+e+"&"+this.props.match.params.id)
        .then(d=>d.json())
        .then((da)=>{
            //alert("da");
            this.fet();
        });

        },10);
        
        }
        
    }

    onSub(e) {
        if(document.getElementById("inp").value.length < 1) {
            alert("The text box is blank!! Please Enter some text");
            e.preventDefault();
        }
        
        
    }

    render() {

        return (
            <div>
                <div id="LisTitle">{this.props.match.params.id}</div>
                <div id="ListTitle">Please enter some items</div>
                
                <div id="wrap">
                    <form method="post" action={"/newList/"+this.props.match.params.id} onSubmit={this.onSub}>
                
                        <input id="inp" type="text" placeholder="item" name="item"/>
                        <button id="listBut" type="submit" >save</button>
                        
                        
                    </form>
                </div>
                <div id="listItemsWrapper" pro={88}>
                    <div>
                    {



this.state.item.map((item,i) => 
                    <div>
                    <div id="listItem" key={77}>{item.item}</div>
                    <button className="delBut" onClick={()=>this.del(item._id)}>delete</button>
                    </div>
      //return ( <div>
       //<div>{a._id}</div>
       //<div id="listItem" key={77}>{a.item}</div>
       //<button onClick={this.del}>test</button>
       
       
       //<div>smash</div>
              // </div>
           
//);
                    )}
                    </div>
                </div>
                
            </div>);
            
    }
    
}

export default MyList;