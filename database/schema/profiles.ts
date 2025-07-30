
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  display_name: text('display_name'),
  bio: text('bio'),
  created_at: timestamp('created_at').defaultNow()
});
