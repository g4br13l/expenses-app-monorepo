import { pinoLogger } from 'hono-pino'
import pino from 'pino'

import envApp from '../env-app'



export function loggerMid() {

  const isProdEnv: boolean = !!envApp?.NODE_ENV
  const logLevelEnv = envApp?.LOG_LEVEL ?? 'info'

  return pinoLogger({
    pino: pino(isProdEnv
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
