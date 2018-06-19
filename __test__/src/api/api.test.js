'use strict';


import superagent from 'superagent';
import api from '../../../server/src/api/api.js';
import app from '../../../server/src/app.js';



describe('app', () => {


  beforeAll( () => {
    app.start(3333); 
  });

  afterAll( ()=>{
    app.stop();
  });

  it('should post and GET a new drumset with the body, and get back that drumset with a specific id', () => {
    let obj = { 
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short description:',
    };
    superagent
      .post('http://localhost:3333/api/v1/drums')
      .send(obj)
      .then(data => {
        let returns = data.body.id;
        superagent 
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


  it('should post a new drum with the body and id', () => {
    let obj = { 
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short description:',
    };
    superagent
      .post('http://localhost:3333/api/v1/drums')
      .send(obj)
      .then(data => {
        let returns = data.body.id;
        expect(data.status).toEqual(200);
        expect(data.body.id).toEqual(returns);
      });
  });

  it('should PUT a new drum with the body changed, and get back that drum with a specific id', () => {
    let obj = { 
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short descriptionsdd:',
    };
    superagent
      .put('http://localhost:3333/api/v1/drums/123')
      .send(obj)
      .then( res => { 
        console.log('stufss');
        expect(res.status).toEqual(200);
      });
  });
 
});

  