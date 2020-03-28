import fs from 'fs';
import { join } from 'path';

export function getPostMetaBySlug(slug) {
  const { meta } = require(`src/posts/${slug}/index.mdx`);

  return {
    slug,
    ...meta,
  };
}

export function getPostBySlug(slug) {
  const post = require(`src/posts/${slug}/index.mdx`);

  return {
    slug,
    ...post,
  };
}

export function getAllPosts() {
  const posts = fs.readdirSync(join(process.cwd(), 'src/posts'));
  return posts.map(dir => getPostMetaBySlug(dir));
}
