
import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';

export const kyc = pgTable('kyc', {
  id: uuid('id').primaryKey(),
  user_id: uuid('user_id'),
  national_id: text('national_id'),
  verified: text('verified'),
  created_at: timestamp('created_at').defaultNow()
});
