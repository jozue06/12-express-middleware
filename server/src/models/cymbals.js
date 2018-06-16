// @flow

'use strict';

import storage from '../lib/storage/data-switch';
import uuid from 'uuid/v1';

class Cymbals{

  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.make = config && config.make || '';
    this.model = config && config.model || '';
    this.size = config && config.size || '';
    this.descript = config && config.descript || '';
  }

  save() {
    return storage.save(this);
  }
  
  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

export default Cymbals;