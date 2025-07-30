
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const disputes = pgTable('disputes', {
  id: uuid('id').primaryKey().defaultRandom(),
  contract_id: uuid('contract_id'),
  raised_by: uuid('raised_by'),
  description: text('description'),
  status: text('status'),
  created_at: timestamp('created_at').defaultNow()
});
