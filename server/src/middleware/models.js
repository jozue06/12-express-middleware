// @flow

'use strict';

import requireAll from 'require-dir';
const models = requireAll('../models');
console.log('models.jsssasdf  ', models);

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