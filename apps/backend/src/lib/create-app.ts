import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import { defaultHook } from 'stoker/openapi'

import type { AppBindings } from '../types-app'

import { loggerMid } from '../middlewares/logger-mid'



export function createRouter(basePath?: string) {
  if (basePath !== undefined) {
    return new OpenAPIHono<AppBindings>({
      strict: false,
      defaultHook 
    }).basePath(basePath)
  }
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook 
  })
}

/* export function createOpenRouter<T extends RouteConfig>(
  config: RouteConfig,
  handler: RouteHandler<T, AppBindings>
) {
  return createRouter().openapi(config, handler)
} */

export function createApp() {
  const app = createRouter()
  app.use(loggerMid())
  app.notFound(notFound)
  app.onError(onError)
  return app
}

