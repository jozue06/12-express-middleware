// @flow

'use strict';

// Models should offload their data storage to another module/system.
// Here, we'll be using a custom data store module of our own creation
import storage from '../lib/storage/data-switch';
import uuid from 'uuid/v1';

class Drums{

  /**
   * Simple constructor function for our drum model
   * @param config
   */
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.brand = config && config.brand || '';
    this.wood = config && config.wood || '';
    this.color = config && config.color || '';
    this.count = config && config.count || '';
    this.descript = config && config.descript || '';
  }

  /**
   * Save an instance of a drum
   * Note that it calls on our external storage mechanism to do this operation
   * @returns {*}
   */
  save() {
    return storage.save(this);
  }

  /**
   * The functions below are all "static" methods on this model.
   * Simply put, that means that you can't use them on instances of this model, but
   * rather use them as top level functions.
   * i.e.
   *    This will use the instance method "save" to save the drum we just created
   *    let myCymbal = new Cymbals({title:'Hi',address:'There'});
   *    myCymbal.save();
   *
   *    To view a single drum you would call the method on the constructor istelf:
   *    Cymbal.fetchOne(id)
   *
   * Note that all of the below methods contain calls on our external storage mechanism
   * to perform their operations
   *
   * @returns {*}
   */
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

export default Drums;