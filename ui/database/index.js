
import { Database } from '@vuex-orm/core'
import User from '../models/User'
import Ticket from '../models/Ticket'
import Account from "../models/Account"
import Tutor from "../models/Tutor"

const database = new Database()

database.register(User)
database.register(Ticket)
database.register(Account)
database.register(Tutor)

export default database