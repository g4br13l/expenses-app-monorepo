import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

import envApp from '../env-app'



const dbClient = createClient({
  url: envApp.DB_URL,
  authToken: envApp.DB_AUTH_TOKEN,
})

export const db = drizzle(dbClient)

