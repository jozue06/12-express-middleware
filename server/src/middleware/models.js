// @flow

'use strict';

// import requireAll from 'require-dir';
// const models = requireAll('../models');
// console.log('models.jsssasdf  ', models);
import drums from '../models/drums.js';
// import cymbals from '../models/cymbals.js';



export default (req,res,next) => {
  req.model = drums;
  next();
};



// export default (req,res,next) => {
//   // console.log(model);
//   // let models;
//   try {
//     // let model = req && req.params && req.params.model;
//     // let models = req && req.params && req.params.model;
//     if ( req.params.model === 'drums' ){
//       let model = drums;
//       console.log(model);
//       next();
//       // if ( model && models[model] && models[model].default ) {
//       //   req.model = models[model].default;
//     }
//     if (req.params.model === 'cymbals' ){
//       let model = cymbals;
//       console.log(model);
//       next();
//     }
//     else { throw 'Model not found'; }
//   }
  
//   catch(e) {
//     throw e;
//   }
// };

