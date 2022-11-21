const configuration = {
  site: {
    name: 'My Site Name',
    description: 'Description of this site',
    siteName: 'SiteName',
    logo: '/assets/logo-black.png',
  },
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'development',
  postgres: {
    databaseLabel: 'local_dev',
    databaseUrl: process.env.DATABASE_URL ?? 'no databaseUrl found',
  },
};

export default configuration;
