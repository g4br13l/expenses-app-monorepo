import { createRoute } from '@hono/zod-openapi'
import * as HttpStatus from 'stoker/http-status-codes'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { z } from 'zod'

import { createRouter } from '../lib/create-app'



const ExpenseSchema = z.object({
  name: z.string(),
  paid: z.boolean(),
  amount: z.coerce.number()
})
type ExpenseSchemaT = z.infer<typeof ExpenseSchema>

const tags = ['expenses']


export const expensesRoutes = createRouter('/expenses')
  
  .openapi(
    createRoute({
      tags,
      method: 'get',
      path: '/list',
      responses: {
        [HttpStatus.OK]: jsonContent(
          z.array(ExpenseSchema),
          'return all expenses'
        )
      }
    }), 
    (c) => {
      return c.json([{
        name: 'house bills',
        paid: false,
        amount: 1000
      }] satisfies ExpenseSchemaT[], HttpStatus.OK)
    }
  )

  .openapi(
    createRoute({
      tags,
      method: 'post',
      path: '/new',
      request: {
        body: jsonContentRequired(
          ExpenseSchema,
          'The expense to create'
        )
      },
      responses: {
        [HttpStatus.OK]: jsonContent(
          ExpenseSchema,
          'The expense created'
        )
      // TODO: Error treatments
      }
    }), 
    (c) => {
      return c.json({
        name: 'new expense',
        paid: true,
        amount: 200
      } satisfies ExpenseSchemaT, HttpStatus.OK)
    }
  )

