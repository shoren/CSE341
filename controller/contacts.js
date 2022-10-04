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
    const result = await mongodb
      .getDb()
      .db('Test')
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  //POST
  const createContact = async (req, res, next) => {
    const result = await mongodb.getDb().db('Test').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(lists);
    });
  };

  // PUT
  const updateContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db('Test')
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(204).json(lists[0]);
    });
  };

  // DELETE
  const deleteContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db('Test')
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
  
  module.exports = { getAll, getSingle,createContact,updateContact,deleteContact };