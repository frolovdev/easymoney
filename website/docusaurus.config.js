module.exports = {
  title: "easy-money",
  tagline: "Library for operating monetary values in js ts",
  url: process.env.SITE_URL || "https://easy-money.now.sh",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "whispers12", // Usually your GitHub org/user name.
  projectName: "easy-money", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
      darkTheme: require("prism-react-renderer/themes/vsDark")
    },

    navbar: {
      title: "easy-money",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/introduction/getting-started",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        },
        { to: "docs/api/api-reference", 
          label: "Api", 
          position: "left" 
        },
        {
          to: "docs/introduction/getting-started#help-and-discussion", 
          label: "Need help?", 
          position: "right"
        },
        {
          href: "https://github.com/whispers12/easy-money",
          label: "Chat",
          position: "right"
        },
        {
          href: "https://github.com/whispers12/easy-money",
          label: "Community",
          position: "right"
        },
        {
          href: "https://github.com/whispers12/easy-money",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "docs/introduction/getting-started"
            },
            {
              label: "FAQ",
              to: "docs/introduction/getting-started"
            },
            {
              label: "Tutorial",
              to: "docs/introduction/getting-started"
            },
            {
              label: "API Reference",
              to: "docs/introduction/getting-started"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Spectrum",
              href: "https://stackoverflow.com/questions/tagged/easy-money"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/frolovdev/easy-money"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} whispers12. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
