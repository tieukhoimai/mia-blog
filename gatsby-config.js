module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/contact.jpg", // Path is relative to the root
          siteName: "my /maɪ/ personal blog", // Used in manifest.json
          shortName: "mai's personal blog", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
            trackingId: "G-V03MRX9P1N",
            anonymize: true, // Default true
            environments: ["production"] // Default ["production"]
        }
      },
    },
  ],
};
