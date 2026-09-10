import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: 'Tim Borny',
    description: 'Field notes on tools for thought, intelligent interfaces, and mapping reality.',
    site: context.site ? `${context.site}${base}` : 'https://mintyorb.github.io/timborny.com',
    items: essays.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${base}/writing/${post.id.replace(/\.md$/, '')}/`,
    })),
  });
}
