// DEPENDENCIES
const express = require('express')
const {People} = require('../models/Index')

//  CONTROLLER ACTIONS


// INDEX
async function index(req, res, next){
    try{
        res.json(await People.find())
    }catch(error){
        res.status(400).json(error)
    }
}

// CREATE
async function create(req, res, next){
    try{
        res.status(201).json(await People.create(req.body))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// DETAILS(SHOW)
async function show(req, res, next){
    try{
        res.json(await People.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
}

// DESTROY
async function destroy(req,res,next) {
    try {
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  }

// UPDATE
async function update(req,res,next) {
    try {
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      res.status(400).json(error);
    }
  }

module.exports = {
    create,
    index,
    getOne: show,
    delete: destroy,
    update
}