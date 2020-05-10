import { Model } from '@vuex-orm/core'




export default class Tutor extends Model {
  static entity = 'tutor'
  
  static primaryKey = ['_id']

  static fields () {
    return {
      _id: this.string(''),
      email: this.string('')
    }
  }

  
}