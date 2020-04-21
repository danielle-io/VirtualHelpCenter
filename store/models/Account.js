import { Model } from '@vuex-orm/core'

export default class Account extends Model {
  static entity = 'account'
  
  static primaryKey = ['_id']

  static fields () {
    return {
      _id: this.string(''),
      status: this.string(''),
      owner: this.string(''),
      codeSnippet: this.string(''),
      questions: this.attr([]),
      attachments: this.attr([]),
      //owner: this.belongsTo(User, '_id'),
      user_id: this.string(null).nullable(),
      title: this.string(''),
      //acceptedBy: this.belongsTo(User, 'user_id')
    }
  }
}