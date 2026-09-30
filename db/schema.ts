import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const entries = sqliteTable('entries', {
 id: text('id').primaryKey(), label: text('label').notNull(), amount: integer('amount').notNull(),
 kind: text('kind').notNull(), category: text('category').notNull(), date: text('date').notNull(),
 frequency: text('frequency').notNull(), endDate: text('end_date'), note: text('note').notNull().default('')
});
