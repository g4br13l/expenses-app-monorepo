import { apiReference } from '@scalar/hono-api-reference'

import type { AppOpenApiT } from '../types-app'

import packageJson from '../../package.json'



export function configOpenApi(app: AppOpenApiT) {

  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJson.version,
      title: 'API Documentation'
    }
  })

  app.get('/reference', apiReference({
    theme: 'kepler',
    defaultHttpClient: {
      targetKey: 'javascript',
      clientKey: 'fetch'
    },
    spec: {
      url: '/doc'
    }
  }))

}

