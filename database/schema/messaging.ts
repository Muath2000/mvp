
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  from_id: uuid('from_id'),
  to_id: uuid('to_id'),
  content: text('content'),
  sent_at: timestamp('sent_at').defaultNow()
});
