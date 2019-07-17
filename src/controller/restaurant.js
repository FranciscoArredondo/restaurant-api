import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default ({ config, db }) => {
  let api = Router();

  // '/v1/restaurant/add'
  api.post('/add', (req, res) => {
    console.log('trying to post...');
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'restaurant saved sucessfully' });
    });
  });
  return api;
};
