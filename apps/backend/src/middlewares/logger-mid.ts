import { pinoLogger } from 'hono-pino'
import pino from 'pino'

import envApp from '../env-app'



export function loggerMid() {

  const isProdEnv = envApp?.NODE_ENV
  const logLevelEnv = envApp?.LOG_LEVEL ?? 'info'

  console.log('(loggerMid) isProdEnv:', isProdEnv, ' logLevelEnv:', logLevelEnv)

  return pinoLogger({
    pino: pino(isProdEnv === 'prod'
      ? undefined
      : {
          transport: {
            target: 'pino-pretty',
            options: { colorize: true }
          },
          level: logLevelEnv
        }),
    http: {
      reqId: () => crypto.randomUUID()
    }
  })

}
