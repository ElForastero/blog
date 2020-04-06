require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withMDX = require('@next/mdx');
const emoji = require('remark-emoji');
const images = require('remark-images');
const kbd = require('remark-kbd');
const externalLinks = require('remark-external-links');
const github = require('remark-github');
const contributors = require('remark-git-contributors');
const slug = require('remark-slug');
const toc = require('remark-toc');
const captions = require('remark-captions');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  env: {
    SITE_URL: process.env.SITE_URL,
    GA_TRACKING_ID: process.env.GA_TRAKING_ID,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    config.resolve.modules.push(__dirname);

    // // 👀
    let rule, moduleRules, cssLoader;
    if (
      (rule = config.module.rules.find(rule =>
        Object.keys(rule).includes('oneOf')
      ))
    ) {
      // Locate css-loader config for css modules
      if (
        (moduleRules = rule.oneOf.filter(
          r =>
            ('test.module.scss'.match(r.test) ||
              'test.module.css'.match(r.test)) &&
            Array.isArray(r.use)
        ))
      ) {
        for (const moduleRule of moduleRules) {
          if (
            (cssLoader = moduleRule.use.find(u => u.loader.match('css-loader')))
          ) {
            cssLoader.options = {
              ...cssLoader.options,
              // Any custom css loader options here
              modules: {
                ...cssLoader.options.modules,
                // Your custom css-modules options below.
                getLocalIdent: () => false, // Fall back to default getLocalIdent function
                localIdentName: '[sha1:hash:hex:4]',
              },
            };
          }
        }
      }

      return config;
    }
  },
};

module.exports = withPlugins(
  [
    optimizedImages,
    withMDX({
      options: {
        remarkPlugins: [
          emoji,
          images,
          kbd,
          externalLinks,
          github,
          [contributors, { appendIfMissing: false }],
          slug,
          toc,
          captions,
        ],
        rehypePlugins: [],
      },
    }),
    withBundleAnalyzer,
  ],
  nextConfig
);
