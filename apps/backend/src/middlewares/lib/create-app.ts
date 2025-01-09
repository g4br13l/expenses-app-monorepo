import type { PinoLogger } from 'hono-pino'

import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

import { loggerMid } from '@/middlewares/logger-mid'



interface AppBindings {
  Variables: {
    logger: PinoLogger
  }
}


export default function createApp() {

  const app = new OpenAPIHono<AppBindings>()
  app.use(loggerMid())
  app.notFound(notFound)
  app.onError(onError)
  return app
}

