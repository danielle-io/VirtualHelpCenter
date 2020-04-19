
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import User from './models/User'
import Ticket from './models/Ticket'


//VuexORM.use(VuexORMAxios) // <- No axios option.

const database = new VuexORM.Database()

database.register(User)
database.register(Ticket)

export const plugins = [VuexORM.install(database)]

