'use strict';

export default (dir) => {
  if ( typeof dir !== 'string' ) { return {}; }
  return {
    'drums': {default: true},
    'cymbals': {default: true},
  };
};
