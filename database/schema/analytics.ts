
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const analytics = pgTable('analytics', {
  id: uuid('id').primaryKey().defaultRandom(),
  event: text('event'),
  user_id: uuid('user_id'),
  metadata: text('metadata'),
  timestamp: timestamp('timestamp').defaultNow()
});
