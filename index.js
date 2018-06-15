// @flow
'use strict';


// more start vroom vroom !

require('dotenv').config();

require('babel-register');

require('./server/src/app.js').start(process.env.PORT);