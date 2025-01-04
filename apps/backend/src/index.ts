import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'



interface ExpensesT {
  id?: number
  name: string
  amount: number
}

const app = new Hono()

app.use(logger())

app.get('/api/v1/expenses', (c) => {
  return c.json({ name: 'expense A', amount: 100 } satisfies ExpensesT)
})

const port = 8080
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
