const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();


app
    .use(bodyParser.json())
    .use((req,res,next) => {
        res.setHeader('Access-Control-Allow-Origin','*');
        next();
    }) 
    .use('/', require('./routes')); // This will reference the routes for where the files  to look for and will use index as a default if not specified 


mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`)
    }
});