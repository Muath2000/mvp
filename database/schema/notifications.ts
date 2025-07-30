
import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const notifications = pgTable('notifications', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id'),
  message: text('message'),
  read: boolean('read').default(false),
  created_at: timestamp('created_at').defaultNow()
});
