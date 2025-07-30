
import { pgTable, text, boolean } from 'drizzle-orm/pg-core';

export const feature_flags = pgTable('feature_flags', {
  key: text('key').primaryKey(),
  description: text('description'),
  enabled: boolean('enabled').default(false)
});
