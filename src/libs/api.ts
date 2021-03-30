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

export function getPostBySlug(
  lang: string,
  slug: string,
  checkForExistence: boolean = false
) {
  if (
    checkForExistence &&
    !fs.existsSync(`src/posts/${lang}/${slug}/index.mdx`)
  ) {
    return { slug, lang, post: null };
  }

  return {
    slug,
    lang,
    ...require(`src/posts/${lang}/${slug}/index.mdx`),
  };
}

export function getAllPosts(lang: string = null) {
  const posts = config.locales.reduce(
    (acc, lang) => ({ ...acc, [lang]: [] }),
    {}
  );

  config.locales.map(lang => {
    const dirContent = fs.readdirSync(join(process.cwd(), `src/posts/${lang}`));

    dirContent.map(dir => posts[lang].push(getPostMetaBySlug(lang, dir)));
  });

  return posts;
}
