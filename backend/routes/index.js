const routes = require ('express').Router();

routes.get('/',(req, res) =>{
    res.send('Caleb Brownie');
});

module.exports = routes;