/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HNC',
  tagline: 'Heco New Coin',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'H Freeman', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'heco-newcoin.com',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: '项目公示', position: 'right'},
        
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: '白皮书',
        },
      
      ],
    },
    footer: {
      style: 'dark',
      links: [
       
       
        {
          title: '联系',
          items: [
            {
              label: '电报群',
              href: 'https://t.me/heco_newcoin',
            },
            {
              label: 'Email',
              to: 'mailto:heco-newcoin@outlook.com',
            },
          ],
        },
        {
          title: '链接',
          items: [
            
            {
              label: 'Dogeswap',
              href: 'https://dogeswap.com/#/swap',
            },
            {
              label: 'xFarmer',
              href: 'https://xfarmer.net/',
            },
            {
              label: 'Btok',
              to: 'https://www.btok.io/',
            },
          ],
        },
        {
          title: '钱包',
          items: [
            {
              label: 'Huobi Wallet',
              to: 'https://www.huobiwallet.com/',
            },
            {
              label: 'Token Pocket',
              href: 'https://www.tokenpocket.pro/',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Heco New Coin, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
