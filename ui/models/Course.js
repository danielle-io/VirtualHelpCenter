import {Model} from '@vuex-orm/core'

export default class Course extends Model {
    static entity = 'courses'

    static primaryKey = ['_id']

    static fields () {
        return {
            _id: this.attr(null),
            dep: this.string(''),
            courseNum: this.string('')
        }
    }
}