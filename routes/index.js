// const routes = require ('express').Router();
// //const app = express()
// const express = require ('express')
// const app = express()

// // app.get('/', require('../../frontend/index.html'))

// routes.get('/',(req, res) =>{
//     res.send('Caleb Brownie');
// });

// module.exports = routes;

//This was added 
const express = require('express');
const router = express.Router();

router.use('/contacts',require('./contacts'))
module.exports = router;