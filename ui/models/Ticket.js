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
      oneLineOverview: this.string(''),
      longerDescription: this.string(''),
      attachments: this.attr([]),
      owner: this.string(''),
      user_id: this.string(null).nullable(),
      title: this.string(''),
      createdAt: this.attr(''),
      course: this.attr('').nullable(),
      acceptedBy: this.belongsTo(User, 'user_id'),
      collapseChevron: this.boolean('false'),
      expandChevron: this.boolean('true')
    }
  }
}