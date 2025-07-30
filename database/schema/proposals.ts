
import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';

export const proposals = pgTable('proposals', {
  id: uuid('id').primaryKey().defaultRandom(),
  project_id: uuid('project_id'),
  expert_id: uuid('expert_id'),
  description: text('description'),
  budget: text('budget'),
  status: text('status'),
  created_at: timestamp('created_at').defaultNow()
});
