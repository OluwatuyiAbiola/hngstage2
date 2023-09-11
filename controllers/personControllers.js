require("../models/db");
const Person = require("../models/person");
const mongoose = require("mongoose");
const { json } = require("express");

/* 
 *Get /api
 *Homepage
*/
// to show all persons on a page
exports.person = async(req, res) => {
      try {
        const person = await Person.find({});
        res.send(person);
    } catch (err) {
        res.json({message : err});
    }
}

//Get /api/:identifier
//to find person by id or name
exports.personByIdentifier = async(req, res) => {
  try{
    const {identifier} = req.params;
    let person;
    
    if (mongoose.Types.ObjectId.isValid(identifier)){
      // if identifier is an id
      person = await Person.findById(identifier);
      
    } else {
      console.log(identifier);
      person = await Person.findOne({name: identifier});
    }
    if (!person){
      return res.status(404).json({message: 'User not found'})
    }
    return res.send(person);
  } catch (err) {
        res.json({message : err});
    }
}

/**
 * Post /api
 * Homepage
 */
exports.addPerson = async (req,res) => {
 
    try{
      //create a new person
      const {name} = await req.body;
      const person = new Person({
        name: name
      });

      //save person
      await person.save();
      return res.status(200).json({message :'Record created successful'});
    } catch(err){
      res.status(500).json({message :err});
      res.status(404).json({message :err});
    }
}

/** PUT
 * Update /api/:identifier
 */
exports.updateByIdentifier = async(req,res) => {
    try{
      const {identifier} = await req.params;
      const updateFields = await req.body;
      let updatePerson;
      if (mongoose.Types.ObjectId.isValid(identifier)){
        // if identifier is an id
        updatePerson = await Person.findByIdAndUpdate(identifier,  {$set: updateFields}, {new: true});
      } else {
        //if identifier is a name
        person = await Person.findOneAndUpdate({name: identifier},  {$set: updateFields}, {new: true});
      }
  
      // if (!updatePerson){
      //   return res.status(404).json({message: "User not found"});
      // }
        
      return res.status(200).json({message: "Record updated successful"});
    } catch(err){
      res.json({message : err});
    }
}

// update or edit a person
//patch
exports.updateInfo = async(req,res) => {
    try{
      const {identifier} = await req.params;
      let changes = await req.body;
      let updatePerson;
    if (mongoose.Types.ObjectId.isValid(identifier)){
      // if identifier is an id
      updatePerson = await Person.findByIdAndUpdate(identifier,  {$set : changes}, {new : true});
    } else {
      //if identifier is a name
      person = await Person.findOneAndUpdate({name: identifier},  {$set : changes}, {new : true});
    }

    // if (!updatePerson){
    //   return res.status(404).json({message: "User not found"});
    // }

    return res.status(200).json({message: "Record updated successful"});
    } catch(err){
      res.json({message : err});
    }
}

/**
 * Delete /api/:id
 */
exports.deleteByIdentifier = async(req,res) => {
    try{
        //get id
        const {identifier} = await req.params;
        let deletedPerson;

        if (mongoose.Types.ObjectId.isValid(identifier)){
          deletedPerson = await Person.findByIdAndDelete(identifier);
        } else {
          deletedPerson = await Person.findOneAndDelete({name : identifier});
        }
        
        if(!deletedPerson){
          return res.status(404).json({messsage : 'User not found'})
        }
        
        return res.status(200).json({message: "Record deleted successful"});
    } catch(err){
      res.json({message : err});
    }
}


