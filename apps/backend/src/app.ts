import createApp from '@/middlewares/lib/create-app'



interface ExpensesT {
  id?: number
  name: string
  amount: number
}

const app = createApp()

app.get('/api/v1/expenses/error', () => {
  throw new Error('Error description')
})

app.get('/api/v1/expenses', (c) => {
  return c.json({ name: 'expense A', amount: 100 } satisfies ExpensesT)
})


export default app
