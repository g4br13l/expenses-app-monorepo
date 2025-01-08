import type { PinoLogger } from 'hono-pino'

import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

import { loggerMid } from './middlewares/logger-mid'



interface ExpensesT {
  id?: number
  name: string
  amount: number
}

interface AppBindings {
  Variables: {
    logger: PinoLogger
  }
}


const app = new OpenAPIHono<AppBindings>()

app.use(loggerMid())
app.notFound(notFound)
app.onError(onError)

app.get('/api/v1/expenses/error', () => {
  throw new Error('Error description')
})

app.get('/api/v1/expenses', (c) => {
  return c.json({ name: 'expense A', amount: 100 } satisfies ExpensesT)
})


export default app
