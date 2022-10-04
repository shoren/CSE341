const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// GET
const getAll = async (req, res, next) => { //Have to put the name of the Database and the collection that belongs to the database respectively
    const result = await mongodb.getDb().db('Test').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  // GET
  const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Test').collection('contacts').find({ _id: userId }); //Find
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  //POST working!
  const createContact = async (req, res, next) => {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const result = await mongodb.getDb().db('Test').collection('contacts').insertOne(contact); //insertOne
    if(result.acknowledged){
      req.status(201).json(response);
    }
  };

  // PUT
  const updateContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const result = await mongodb.getDb().db('Test').collection('contacts').replaceOne({ _id: userId },contact); //replaceOne
    if(response.acknowledged){
      req.status(204).json(response);
    }
  };

  // DELETE
  const deleteContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Test').collection('contacts').remove({ _id: userId }); // Remove
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
  
  module.exports = { getAll,getSingle,createContact,updateContact,deleteContact };