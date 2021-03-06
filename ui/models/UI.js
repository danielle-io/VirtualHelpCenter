import { Model } from '@vuex-orm/core'

export default class UI extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'ui'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      drawer: this.boolean(false)
    }
  }
}