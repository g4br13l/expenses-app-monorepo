import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z } from 'zod'



expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.enum(['dev', 'stg', 'prod']).default('dev'),
  PORT: z.coerce.number().default(8080),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
})


// eslint-disable-next-line node/no-process-env
const { data: envApp, error } = EnvSchema.safeParse(process.env)

if (error) {
  console.error('**Error** invalid env:')
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2))
  process.exit(1)
}

export default envApp
