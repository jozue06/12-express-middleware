'use strict';

// import Drums from '../../12-express-middleware/server/src/models/drums.js';
// import Cymbals from '../../12-express-middleware/server/src/models/cymbals.js';

export default (dir) => {
  if ( typeof dir !== 'string' ) { return {}; }
  return {
    'drums': {default: true},
    'cymbals': {default: true},
  };
};


// import requireDirectory from 'require-directory';

// export default requireDirectory;