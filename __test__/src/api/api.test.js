'use strict';


import superagent from 'superagent';
import api from '../../../server/src/api/api.js';



describe('app', () => {

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
        expect(data.status).toEqual(200);
        expect(data.body.id).toEqual(returns);
      });
  });

  xit('should PUT a new drum with the body changed, and get back that drum with a specific id', () => {
    let obj = { 
      id:'123',
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short descriptionss:',
    };
    return superagent
      .put('http://localhost:3333/api/v1/drums/123')
      .send(obj)
      .then(data => {
        console.log('stufss');
        expect(data.status).toEqual(200);
      });
  });
 
});

  