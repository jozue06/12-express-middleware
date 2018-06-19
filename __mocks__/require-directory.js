'use strict';

// import drums from '../../12-express-middleware/server/src/models/drums.js';
// import cymbals from '../../12-express-middleware/server/src/models/cymbals.js';

// export default (dir) => {
//   if ( typeof dir !== 'string' ) { return {}; }
//   return {
//     'drums': {default: drums},
//     'cymbals': {default: cymbals},
//   };
// };


import requireDirectory from 'require-directory';

export default requireDirectory;