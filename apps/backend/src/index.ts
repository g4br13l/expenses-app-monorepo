import { serve } from '@hono/node-server'

import app from './app'
import envApp from './env-app'




const port = envApp?.PORT
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
