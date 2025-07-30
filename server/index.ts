import express from 'express';
import cors from 'cors';
import projectRoutes from '../domains/projects/routes/projectRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mount routes
import projectsRoutes from '../domains/projects/routes/projectsRoutes';
import proposalsRoutes from '../domains/proposals/routes/proposalsRoutes';
import contractsRoutes from '../domains/contracts/routes/contractsRoutes';
import disputesRoutes from '../domains/disputes/routes/disputesRoutes';
import notificationsRoutes from '../domains/notifications/routes/notificationsRoutes';
import messagingRoutes from '../domains/messaging/routes/messagingRoutes';
import profilesRoutes from '../domains/profiles/routes/profilesRoutes';
import paymentsRoutes from '../domains/payments/routes/paymentsRoutes';
import analyticsRoutes from '../domains/analytics/routes/analyticsRoutes';
import complianceRoutes from '../domains/compliance/routes/complianceRoutes';
import feature-flagsRoutes from '../domains/feature-flags/routes/feature-flagsRoutes';
app.use('/api/projects', projectsRoutes);
app.use('/api/proposals', proposalsRoutes);
app.use('/api/contracts', contractsRoutes);
app.use('/api/disputes', disputesRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/messaging', messagingRoutes);
app.use('/api/profiles', profilesRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/feature-flags', feature-flagsRoutes);
app.use('/api/projects', projectRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('CyberAjeer API is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
