//const { Router } = require('express');
const express = require('express');
// const routes = require ('express').Router();
const router = express.Router();
const contactsController = require('../controller/characters');

// Get all of the documents in the contacts collection
router.get('/', contactsController.getAllCharacters);

// Get one of the documents in the contacts collection
//GET REQUEST
router.get('/:id', contactsController.getSingleCharacter);
//POST
router.post('/', contactsController.createCharacter);
//PUT
router.put('/:id', contactsController.updateCharacter);
//DELETE
router.delete('/:id', contactsController.deleteCharacter);

module.exports = router;