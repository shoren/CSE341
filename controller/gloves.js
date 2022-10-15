const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
// GET
const getAllGloves = async (req, res, next) => { //Have to put the name of the Database and the collection that belongs to the database respectively
    const result = await mongodb.getDb().db('Week05').collection('gloves').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  // GET
  const getSingleGlove = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Week05').collection('gloves').find({ _id: userId }); //Find
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  //POST working!
  const createGlove = async (req, res, next) => {
    const glove = {
        CharacterName: req.body.CharacterName,
        prefix1: req.body.prefix1,
        prefix2: req.body.prefix2,
        prefix3: req.body.prefix3,
        suffix1: req.body.suffix1,
        suffix2: req.body.suffix2,
        suffix3: req.body.suffix3
    };
    const result = await mongodb.getDb().db('Week05').collection('gloves').insertOne(glove); //insertOne
    if(result.acknowledged){
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the glove.');
    }
  };

  // PUT working
  const updateGlove = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const glove = {
        CharacterName: req.body.CharacterName,
        prefix1: req.body.prefix1,
        prefix2: req.body.prefix2,
        prefix3: req.body.prefix3,
        suffix1: req.body.suffix1,
        suffix2: req.body.suffix2,
        suffix3: req.body.suffix3
    };

    const result = await mongodb.getDb().db('Week05').collection('gloves').replaceOne({ _id: userId },glove); //replaceOne
    if(result.acknowledged){
      res.status(204).send();
    }
  };

  // DELETE  works
  const deleteGlove = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Week05').collection('gloves').remove({ _id: userId },true); // Remove
    console.log(result);
    res.status(200).send();
  };
  
  module.exports = { getAllGloves,getSingleGlove,createGlove,updateGlove,deleteGlove };