import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z } from 'zod'



expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.enum(['dev', 'stg', 'prod']).default('dev'),
  PORT: z.coerce.number().default(8080),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
  DB_URL: z.string(),
  DB_AUTH_TOKEN: z.string().optional()
}).superRefine((input, ctx) => {
  if (input.NODE_ENV !== 'dev' && !input.DB_AUTH_TOKEN) {
    ctx.addIssue({
      code: z.ZodIssueCode.invalid_type,
      expected: 'string',
      received: 'undefined',
      path: ['DB_AUTH_TOKEN'],
      message: 'must be set when NODE_ENV is not dev'
    })
  }
  return true
})


/* export type EnvAppT = z.infer<typeof EnvSchema>
let env: EnvAppT */

// eslint-disable-next-line node/no-process-env
const { data: envApp, error } = EnvSchema.safeParse(process.env)

// eslint-disable-next-line no-console
console.log('(env-app.ts) envApp:', envApp)

if (error) {
  console.error('** Error -> invalid env:')
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2))
  process.exit(1)
}

export default envApp!
