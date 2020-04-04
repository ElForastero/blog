import fs from 'fs';
import { join } from 'path';
import config from '../../i18n.json';

export function getPostMetaBySlug(lang: string, slug: string) {
  const { meta } = require(`src/posts/${lang}/${slug}/index.mdx`);

  return {
    slug,
    lang,
    ...meta,
  };
}

export function getPostBySlug(lang: string, slug: string) {
  if (!fs.existsSync(`src/posts/${lang}/${slug}/index.mdx`)) {
    return { slug, lang, post: null };
  }

  const post = require(`src/posts/${lang}/${slug}/index.mdx`);

  return {
    slug,
    lang,
    ...post,
  };
}

export function getAllPosts(lang: string = null) {
  const posts = config.allLanguages.reduce(
    (acc, lang) => ({ ...acc, [lang]: [] }),
    {}
  );

  config.allLanguages.map(lang => {
    const dirContent = fs.readdirSync(join(process.cwd(), `src/posts/${lang}`));

    dirContent.map(dir => posts[lang].push(getPostMetaBySlug(lang, dir)));
  });

  return posts;
}
