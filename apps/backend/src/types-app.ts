import type { OpenAPIHono } from '@hono/zod-openapi'
import type { PinoLogger } from 'hono-pino'




export interface AppBindings {
  Variables: {
    logger: PinoLogger
  }
}

export type AppOpenApiT = OpenAPIHono<AppBindings>

// export type AppRouteHandler<T extends RouteConfig> = RouteHandler<T, AppBindings>
