import { defineCollection, z } from 'astro:content';
import { client } from "../data/sanity.js";

// Define schema for your blog posts
const blog = defineCollection({
  
  loader: async () => {
    const query = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      "mainImage": mainImage.asset->url,
      excerpt,
      authors[]->{name},
      categories[]->{name}
    }`;
    
    const posts = await client.fetch(query);
    return posts.map(post => ({
        id: post._id,
        ...post,
    }));    
  },
  // Define the shape of your blog data
  schema: z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.object({
      current: z.string(),
    }),
    publishedAt: z.string(),
    mainImage: z.string(),
    excerpt: z.string(),
    authors: z.array(z.object({ name: z.string() })),
    categories: z.array(z.object({ name: z.string() })),
  }),
});

export const collections = { blog };
