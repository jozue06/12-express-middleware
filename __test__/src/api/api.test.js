'use strict';


import superagent from 'superagent';
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
    return superagent
      .post('http://localhost:3333/api/v1/drums')
      .send(obj)
      .then(data => {
        let returns = data.body.id;
        return  superagent 
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
    return superagent
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
      descript:'Short description:',
    };

    let obj2 = { 
      brand:'OCDP',
      wood:'Maple',
      color: 'blue',
      count: '5-piece',
      descript:'Short d:',
    };
    return superagent
      .post('http://localhost:3333/api/v1/drums')
      .send(obj)
      .then(data => {
        let returns = data.body.id;
        return superagent
          .put(`http://localhost:3333/api/v1/drums/${returns}`)
          .send(obj2)
          .then( res => { 
            expect(res.status).toEqual(200);
          });
      });
  });

  it('should return error 404 for bad address', () =>{
    return  superagent 
      .get(`http://localhost:3333/api/v1/`)
      .catch(res => {
        expect(res.status).toEqual(404);
      });
  });

  it('should return error 404 for bad model', () =>{
    return  superagent 
      .get(`http://localhost:3333/api/v1/d`)
      .catch(err => {
        expect(err.status).toEqual(500);
      });
  });

  it('should return error for bad id', () =>{
    return  superagent 
      .get(`http://localhost:3333/api/v1/drums/444`)
      .catch(err => {
        expect(err.status).toEqual(500);
      });
  });

  it('should return error for bad post object', () =>{
    return superagent 
      .post(`http://localhost:3333/api/v1/cymbals`)
      .send({})
      .catch(res => {
        expect(res.status).toEqual(500);
      });
  });
});



  