// @flow

'use strict';
import drums from '../models/drums.js';



export default (req,res,next) => {
  req.model = drums;
  console.log('inside the models file');
  next();
};
