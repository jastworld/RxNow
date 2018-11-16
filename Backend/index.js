const express = require('express');
const app = express();
const userRoute = require('./app/routes/users');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');

const connStr = 'mongodb://localhost:27017/rxnow';
mongoose.connect(connStr,{ useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', userRoute);
app.get('/',(req, res, next)=>{
    return res.send("Welcome to RxNow")
})
app.use(function(req, res, next){
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});

app.use(function(error,req,res, next){
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
    console.log(req);
});
port = process.env.port || 3010;

app.listen(port, function() {
  console.log('RxNow app listening on port '+port+'!');
});
