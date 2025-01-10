import { createRoute } from '@hono/zod-openapi'
import * as HttpStatus from 'stoker/http-status-codes'
import { jsonContent } from 'stoker/openapi/helpers'
import { z } from 'zod'

import { createRouter } from './lib/create-app'




export const indexRoutes = createRouter().openapi(
  createRoute({
    method: 'get',
    path: '/',
    responses: {
      [HttpStatus.OK]: jsonContent(
        z.object({
          message: z.string()
        }),
        'Tasks API Index'
      )
    },
    tags: ['index']
  }),
  (c) => {
    return c.json({ message: 'Tasks API' }, HttpStatus.OK)
  }
)

