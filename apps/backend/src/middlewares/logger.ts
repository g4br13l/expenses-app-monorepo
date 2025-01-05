import { pinoLogger } from 'hono-pino'
import pino from 'pino'



export function logger() {
  return pinoLogger({
    pino: pino(process.env.NODE_ENV === 'production'
      ? undefined
      : {
          transport: {
            target: 'pino-pretty',
            options: { colorize: true }
          },
          level: process.env.LOG_LEVEL || 'info'
        }),
    http: {
      reqId: () => crypto.randomUUID()
    }
  })
}
