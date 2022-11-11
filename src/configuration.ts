const configuration = {
  site: {
    name: 'My Site Name',
    description: 'Description of this site',
    siteName: 'SiteName',
    logo: '/static/logo.png',
  },
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'development',
};

export default configuration;
