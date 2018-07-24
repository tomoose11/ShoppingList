const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const data = 400;
const path = require("path");
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const Morgan = require("morgan");
const ObjectID = require("mongodb").ObjectID;

app.use(Morgan("dev"));


app.use(bodyParser.urlencoded({extended:true}));


var db;
mongoClient.connect("mongodb://dance:123456a@ds131721.mlab.com:31721/mydat2",(err,client)=>{
   
    db = client.db("mydat2");
    app.listen(PORT,()=>{
        console.log("listening on port"+PORT);
    });
});

console.log("hi");

//if(process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
//}

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"build","index.html"));
});

app.get("/get",(req,res)=>{
    db.listCollections().toArray(function(err, collections){
        res.json(collections);
        console.log(collections);
        console.log(collections[0].name);
    });
});

app.get("/newList/list/:id",(req,res)=>{
    //obID = new ObjectID(req.params.id);
    db.collection(req.params.id).find().toArray((err,results)=>{
        res.json(results);
        console.log(results);
    });
});

app.post("/newList/:id",(req,res)=>{
    var hh = "kkk";
    db.collection(req.params.id).save(req.body);
    //res.status(201);
    res.redirect("/MyList/"+req.params.id);
    console.log("posted");
});

app.get("/newList/delete/:id&:col",(req,res)=>{
    var OBid = new ObjectID(req.params.id);
    console.log(req.params.col);
    console.log(req.params.id);
    db.collection(req.params.col).remove({"_id":OBid});
    res.json("deleted");
    console.log(OBid);
});

app.get("/deletecol/:id",(req,res)=>{
    console.log("!!!!"+req.params.id);
    db.collection(req.params.id).drop({},(err,re)=>{
        if(err) {console.log(err);}
        res.json("deleted");
        //console.log(re);
    });
});



//-------------------------------------------------------------------------

//"start": "react-scripts start",

//"start": "concurrently \"npm run server\" \"npm run client\"",