import { expensesRoutes } from './expenses/expenses-route'
import { indexRoutes } from './index-route'
import { configOpenApi } from './lib/config-open-api'
import { createApp } from './lib/create-app'



const app = createApp()

const routesApp = [
  indexRoutes,
  expensesRoutes
] as const

routesApp.forEach((route) => {
  return app.route('/api/v1', route)
})


configOpenApi(app)


export default app
