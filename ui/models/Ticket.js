import { Model } from '@vuex-orm/core'
import User from './User'



export default class Ticket extends Model {
  static entity = 'tickets'
  
  static primaryKey = ['_id']

  static fields () {
    return {
      _id: this.string(''),
      status: this.string(''),
      codeSnippet: this.string(''),
      questions: this.attr([]),
      oneLineOverview: this.string(''),
      longerDescription: this.string(''),
      attachments: this.attr([]),
      owner: this.string(''),
      user_id: this.string(null).nullable(),
      title: this.string(''),
      // acceptedBy: this.belongsTo(User, 'user_id')
    }
  }

  
}