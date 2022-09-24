const { Router } = require('express');
const express = require('express');
const router = require ('express').Router();


//Get the file that we are looking for
Router.use('contacts', require('./contacts'))


// routes.get('/',(req, res) =>{
//     res.send('Caleb Brownie');
// });

module.exports = router;