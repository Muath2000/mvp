import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';
import { seedProjects } from './seeders/projectsSeeder';
import { seedProposals } from './seeders/proposalsSeeder';
import { seedContracts } from './seeders/contractsSeeder';
import { seedDisputes } from './seeders/disputesSeeder';
import { seedNotifications } from './seeders/notificationsSeeder';
import { seedMessaging } from './seeders/messagingSeeder';
import { seedProfiles } from './seeders/profilesSeeder';
import { seedPayments } from './seeders/paymentsSeeder';
import { seedAnalytics } from './seeders/analyticsSeeder';
import { seedCompliance } from './seeders/complianceSeeder';
import { seedFeatureFlags } from './seeders/feature-flagsSeeder';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle(client, { schema });

async function main() {
  await client.connect();
  console.log('Connected to DB');
  await seedProjects();
  await seedProposals();
  await seedContracts();
  await seedDisputes();
  await seedNotifications();
  await seedMessaging();
  await seedProfiles();
  await seedPayments();
  await seedAnalytics();
  await seedCompliance();
  await seedFeatureFlags();
  await client.end();
}

main().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
