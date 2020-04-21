module.exports = {
  title: "easymoney",
  tagline:
    "Library for operating with monetary values in JavaScript and TypeScript",
  url: process.env.SITE_URL || "https://easymoney.now.sh",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "whispers12", // Usually your GitHub org/user name.
  projectName: "easymoney", // Usually your repo name.
  themeConfig: {
    algolia: {
      indexName: "easymoney",
      apiKey: process.env.ALGOLIA_API_KEY,
    },

    sidebarCollapsible: false,
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
    },

    navbar: {
      title: "easymoney",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/introduction/getting-started",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "docs/api/api-reference", label: "Api", position: "left" },
        {
          to: "docs/introduction/getting-started#help-and-discussion",
          label: "Need help?",
          position: "right",
        },
        {
          href: "https://spectrum.chat/easymoney",
          label: "Spectrum",
          position: "right",
        },
        {
          href: "https://github.com/frolovdev/easymoney",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "docs/introduction/getting-started",
            },
            {
              label: "FAQ",
              to: "docs/introduction/getting-started",
            },
            {
              label: "Tutorial",
              to: "docs/introduction/getting-started",
            },
            {
              label: "API Reference",
              to: "docs/api/api-reference",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Spectrum",
              href: "https://spectrum.chat/easymoney",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/frolovdev/easymoney",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} frolovdev. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/frolovdev/easymoney/tree/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
