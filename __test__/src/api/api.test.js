'use strict';

jest.mock('require-dir');

import superagent from 'superagent';
// import app from '../../../server/src/app.js';
// import api from '../../../server/src/api/api.js';



describe('app', () => {
  // beforeAll( () => {
  //   app.start(3333);
  // });

  // afterAll( ()=>{
  //   app.stop();
  // });

  it('should post a new note with the body, and get back that note with a specific id', () => {
    let obj = { 
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short description:',
    };
    return superagent
      .post('http://localhost:3333/api/v1/drums')
      .send(obj)

      .then(data => {
        let returns = data.body.id;
        return superagent
          .get(`http://localhost:3333/api/v1/drums/${returns}`)
          .then(data => {
            console.log('top', data.status);
            console.log(returns);
            expect(data.status).toEqual(200);
            expect(data.body.id).toEqual(returns);
          })
          .catch(err => {
            console.log(err);
          });
      });

  });


  it('should post a new note with the body, and get back that note with a specific id', () => {
    let obj = { 
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short description:',
    };
    return superagent
      .post('http://localhost:3333/api/v1/drums')
      .send(obj)
      .then(data => {
        let returns = data.body.id;
        console.log('last 200: ', data.status);
        expect(data.status).toEqual(200);
        expect(data.body.id).toEqual(returns);
      });
  });

});