// @flow

'use strict';

const debug = require('debug')('app');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import router from './api/api.js';
let app = express();

let corsOptions = {
  origin: 'http://localhost',
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(notFound);
app.use(errorHandler);
let isRunning = false;

module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        console.log('server is up on port: ', port);
        debug('Server is up on port', port);
      });
    }
    else {
      debug('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};