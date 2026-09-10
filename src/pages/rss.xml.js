import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays');
  return rss({
    title: 'Tim Borny — Liminal Lantern',
    description: 'Field notes on tools for thought, intelligent interfaces, and mapping reality.',
    site: context.site || 'https://timborny.com',
    items: essays.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id.replace(/\.md$/, '')}/`,
    })),
  });
}
