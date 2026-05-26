/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.abconsultoriaestrategica.com.br',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/icon.png', '/apple-icon.png'],
};
