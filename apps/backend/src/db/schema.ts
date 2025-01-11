import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'



export const usersTable = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  phone: text('phone'),
  password: text('password').notNull(),
  active: integer('active', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date())
})


export const expensesTable = sqliteTable('expenses', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  amount: real('amount').notNull(),
  paid: integer('paid', { mode: 'boolean' }).notNull().default(false),
  userId: integer('user_id').notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date())
})

export type InsertUsersT = typeof usersTable.$inferInsert
export type SelectUsersT = typeof usersTable.$inferSelect

export type InsertExpensesT = typeof expensesTable.$inferInsert
export type SelectExpensesT = typeof expensesTable.$inferSelect
