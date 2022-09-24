const { Router } = require('express');
const express = require('express');
const routes = require ('express').Router();

//Router.use('contacts', require('./contacts'))


routes.get('/',(req, res) =>{
    res.send('Caleb Brownie');
});

module.exports = routes;