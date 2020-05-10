
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import User from '../ui/models/User'
import Ticket from '../ui/models/Ticket'
import Account from '../ui/models/Account'


VuexORM.use(VuexORMAxios) // <- No axios option.

const database = new VuexORM.Database()

database.register(User)
database.register(Ticket)
database.register(Account)

export const plugins = [VuexORM.install(database)]

