
import { Database } from '@vuex-orm/core'
import User from '../models/User'
import Ticket from '../models/Ticket'

const database = new Database()

database.register(User)
database.register(Ticket)

export default database