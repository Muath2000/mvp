
import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
  description: text('description'),
  status: text('status'),
  client_id: uuid('client_id'),
  created_at: timestamp('created_at').defaultNow()
});
