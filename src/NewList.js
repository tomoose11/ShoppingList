import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Route,Redirect} from 'react-router-dom';


var arr3 = [];

class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            stuff: [],
            title: "",
            redir: false
        };
        this.del = this.del.bind(this);
    }

    componentDidMount() {
        var title = prompt("Enter Title of List");
        //alert(title);
        
        if(title == "") {
            alert("The text box is blank!! \nPlease try again");
            this.componentDidMount();
        }
        if(title != "") {
            this.setState({
                title:title
            });
        }
        if(title == null) {
        //this.fet();
        this.setState({redir:true});
        }
    }

    fet() {
        fetch("/newList/list/"+this.state.title)
        .then(d=>d.json())
        .then((da)=>{
            alert("ooo");
            var p = da.map((item,a)=>
        <div onClick={()=>this.del(item._id)}>{item._id}</div>);

        let arr2 = [];
        var index = 0;

        for(var i = 0; i < da.length; i++) {
            
            arr2.push(<div key={66} onClick={this.del.bind(this,da[i].item)}>{da[i]._id}</div>);
            index +=1;
            this.setState({
                item: da,
                stuff: arr2
            });
        }
            
            
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
        this.fet();
    }

    del(e) {
        var kk = Object.keys(e)[0];
        window.confirm("Are you sure you want to delete this item?");
        fetch('/newList/delete/'+e)
        .then(d=>d.json())
        .then((da)=>{
            //alert("da");
            this.fet();
        });
        
    }

    onSub(e) {
        if(document.getElementById("inp").value.length < 1) {
            alert("The text box is blank!! Please Enter some text");
            e.preventDefault();
        }
    }

    render() {
            if(this.state.redir == true) {
                return <Redirect to='/' />;
            }
        return (
            <div>
                <div id="LisTitle">{this.state.title}</div>
                <div id="ListTitle">Please enter some items</div>
                
                <div id="wrap">
                    <form method="post" action={"/newList/"+this.state.title} onSubmit={this.onSub}>
                
                        <input id="inp" type="text" placeholder="item" name="item"/>
                        <button id="listBut" type="submit" onclick={()=>this.clickUpdate()}>save</button>
                        
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

export default NewList;