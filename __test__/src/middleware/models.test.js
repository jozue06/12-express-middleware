'use strict';

// jest.mock('require-directory'); 

import modelFinder from '../../../server/src/middleware/models';

describe('Model Finder Middleware', () => {
  it('throws an error if a valid model is not present', () => {
    let req = {};
    let res = {};
    let next = () => {};
    expect( () => {
      modelFinder(req,res,next);
    }).toThrow();
  });
  it('returns a model object/function when a valid model is requested', () => {
    let req = {params:{model:'drums'}};
    console.log(req.params.model);
    let res = {};
    let next = () => {};
    modelFinder(req,res,next);
    expect(req.params.model).toBe('drums');
  });
});