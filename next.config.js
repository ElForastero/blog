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
const nextTranslate = require('next-translate');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = nextTranslate({
  future: {
    webpack5: false,
  },
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    config.resolve.modules.push(__dirname);

    return config;
  },
});

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
