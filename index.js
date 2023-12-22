const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./dataSchema')
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://Dev:Hecker@cluster0.ntefm2r.mongodb.net/test?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri);
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})


app.post('/insert', async(req, res) => {
    const Name = req.body.Name
    const Email = req.body.Email
const Typ = req.body.Typ
    const Loc = req.body.Loc
    const formData = new User({
        name: Name,
        email:Email,
typ:Typ,
loc:Loc
    });
    db.collection('artest').insertOne(formData,function(err, collection){
      if (err) throw err;
      console.log("Record inserted Successfully");
           
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
