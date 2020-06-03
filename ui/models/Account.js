import { Model } from '@vuex-orm/core'
import User from './User'


export default class Account extends Model {
  static entity = 'account'

  static fields () {
    return {
      // $id: this.belongsTo(User, 'user_id'),
			// isLoggedIn: this.boolean(false),
    }
  }
}