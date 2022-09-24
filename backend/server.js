const express = require ('express')
const app = express()
const port = process.env.PORT || 3000

// send to the routes folder and find a path there
app.get('/', require('./routes'))

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})

//server.js and app.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongodb = require('./db/connect');

// const port = process.env.PORT || 8080;
// const app = express();


// app
//     .use(bodyParser.json())
//     .use((req,res,next) => {
//         res.setHeader('Access-Control-Allow-Origin','*');
//         next();
//     }) 
//     .use('/', require('./routes')); // This will reference the routes for where the files  to look for and will use index as a default if not specified 


// mongodb.initDb((err, mongodb) => {
//     if(err) {
//         console.log(err);
//     } else {
//         app.listen(port);
//         console.log(`Connected to DB and listening on ${port}`)
//     }
// });
