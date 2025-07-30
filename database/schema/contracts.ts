
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const contracts = pgTable('contracts', {
  id: uuid('id').primaryKey().defaultRandom(),
  project_id: uuid('project_id'),
  expert_id: uuid('expert_id'),
  terms: text('terms'),
  status: text('status'),
  signed_at: timestamp('signed_at')
});
