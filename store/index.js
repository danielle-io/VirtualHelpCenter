
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import User from './models/User'
import Ticket from './models/Ticket'
import Account from './models/Account'


//VuexORM.use(VuexORMAxios) // <- No axios option.

const database = new VuexORM.Database()

database.register(User)
database.register(Ticket)
database.register(Account)

export const plugins = [VuexORM.install(database)]

