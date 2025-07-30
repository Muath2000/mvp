
import { pgTable, uuid, text, numeric, timestamp } from 'drizzle-orm/pg-core';

export const payments = pgTable('payments', {
  id: uuid('id').primaryKey().defaultRandom(),
  contract_id: uuid('contract_id'),
  amount: numeric('amount'),
  status: text('status'),
  paid_at: timestamp('paid_at')
});
