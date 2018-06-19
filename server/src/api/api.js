// @flow
'use strict';

import express from 'express';
const router = express.Router();
import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/api/v1/:model', (req,res,next) => {
  if(!req.params.model || !req.params.id){
    console.log('thrown erro');
    throw err;
  }
  req.model.fetchAll()
    .then(data => sendJSON(res,data))
    .catch(() => {
      console.log('nexted');
      next();
    });
    
});

router.get('/api/v1/:model/:id', (req,res,next) => {
  if(!req.params.id){
    throw err;
  }
  req.model.findOne(req.params.id)
    .then(data => sendJSON(res,data))
    .catch(next);
});


router.post('/api/v1/:model', (req,res,next) => {
  if(!req.body.descript){
    throw err;
  }
  let record = new req.model(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(next);
});


router.put('/api/v1/:model/:id', (req,res,next) => {
  req.model.updateOne(req.params.id, req.body)
    .then((data) => { 
      sendJSON(res,data);
    })
    .catch(() => {
      next();
    });
});



export default router;