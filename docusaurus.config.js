/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'pypesa',
  tagline: 'mpesa integration made easy',
  url: 'https://kalebu.github.io',
  baseUrl: '/pypesa/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/4-2-python-logo-picture_64x64.ico',
  organizationName: 'kalebu', // Usually your GitHub org/user name.
  projectName: 'kalebu.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'pypesa',
      logo: {
        alt: 'My Site Logo',
        src: 'img/4-2-python-logo-picture.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/kalebu/pypesa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pypesa',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/pypesa',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/j_kalebu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kalebu/pypesa',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} pypesa, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
