import express from 'express';
import mongoose from 'mongoose';
import Portfolio from '../models/portfolioModel';
// GET route to retrieve all records


export default async function handler(req,res,next){
 
  if(req.method === "GET") {
    console.log("This page is render");
    try {
      const records = await Portfolio.find();
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving records.' });
    }
  };
  
  // GET route to retrieve a single record by id
  router.get('/:id', async (req, res) => {
    try {
      const record = await Portfolio.findById(req.params.id);
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({ message: 'Record not found.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving record.' });
    }
  });
  
  // POST route to create a new record
  router.post('/', async (req, res) => {
    try {
      const record = new Portfolio(req.body);
      await record.save();
      res.status(201).json(record);
    } catch (error) {
      res.status(400).json({ message: 'Error creating record.' });
    }
  });
  
  // PUT route to update an existing record
  router.put('/:id', async (req, res) => {
    try {
      const record = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({ message: 'Record not found.' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating record.' });
    }
  });
  
  // DELETE route to delete a record
  router.delete('/:id', async (req, res) => {
    try {
      const record = await Portfolio.findByIdAndDelete(req.params.id);
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({ message: 'Record not found.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting record.' });
    }
  });
    


}