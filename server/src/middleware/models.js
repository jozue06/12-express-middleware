// @flow

'use strict';

/**
 * Dynamically find and set the right model, based on the URL Param
 *    i.e.  /api/vi/drums/12345 would result in the model being "drums"
 *          assuming there is a valid "drums.js" file in the models folder
 * @param req
 * @param res
 * @returns {*}
 */

// Read and require every file in the "models" directory
// This allows us to dynamically create and use models with ONE API.
import requireAll from 'require-dir';
const models = requireAll('../models');
/*
  models: {
    'cymbals': {default: Function()...},
    'drums': {default: Function() ...}
  }
 */
export default (req,res,next) => {
  try {
    let model = req && req.params && req.params.model;
    if ( model && models[model] && models[model].default ) {
      req.model = models[model].default;
      next();
    }
    else { throw 'Model not found'; }
  }
  catch(e) {
    throw e;
  }
};