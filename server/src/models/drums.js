// @flow

'use strict';

import storage from '../lib/storage/data-switch';
import uuid from 'uuid/v1';

class Drums{
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.brand = config && config.brand || '';
    this.wood = config && config.wood || '';
    this.color = config && config.color || '';
    this.count = config && config.count || '';
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

  static updateOne(id, body) {
    return storage.updateOne(id, body);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

export default Drums;