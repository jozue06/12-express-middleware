'use strict';

import express from 'express';
import notFound from './404.js';
import errorHandler from './error.js';
import logger from './logs';

let app = express();

// Here is some global express middleware for parsing data
// Because we define it with no "route" at the app level, it runs on every route
app.use(express.json());

// Here, we define some middlware called "logger" that we imported in.
// It will run on all routes (and you'll see it's logs in the console)
app.use(logger);

// Here, we create another simple middleware but only set it to run
// on the /a route
let aweMW = (req,res,next) => {
  console.log('middle where function hit');
  next();
};
app.use('/q', aweMW);

// Hit each of these routes to see that we're getting the right things in the
// server's console log as well as the right response to the browser.
app.get('/', (req,res,next) => {
  console.log('In the "/" route');
  res.status(200);
  res.send('All Good');
});

app.get('/q', (req,res,next) => {
  console.log('Hit the /q route');
  res.status(200);
  res.send('/q no IoT');
});

// This route will invoke the error middleware by throwing an error
// this simulates a catastrophe in your server
app.get('/bad', (req,res,next) => {
  console.log('In the catastrophicly /bad route');
  throw 'bad failed';
});

// this route will invoke the error middleware progamatically
// this gives you the power to "throw" server errors in code
// Note that next, when given an argument will ALWAYS throw an express error
app.get('/not', (req,res,next) => {
  console.log('In the /not route express error');
  next(' \'not\' failed');
});

// 404 Route
// This will get called on any route we don't have defined
app.use('*', notFound);

// Error Route
app.use(errorHandler);

app.listen(3333);