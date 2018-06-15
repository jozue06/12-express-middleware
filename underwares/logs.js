'use strict';

/**
 * Super simple middleware that just logs out its existence.

 */
export default (req,res,next) => {
  console.log('Logs are cut down trees turned into firewood');
  next();
};