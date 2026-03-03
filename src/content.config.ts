// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";

// Blog collection
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

// Projects/Portfolio collection
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999)
  })
});

// Music Albums collection
const albums = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/albums" }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    releaseDate: z.date(),
    coverImage: z.string(),
    description: z.string(),
    spotify: z.string().optional(),
    appleMusic: z.string().optional(),
    soundcloud: z.string().optional(),
    youtube: z.string().optional(),
    featured: z.boolean().default(false),
    tracks: z.array(z.object({
      title: z.string(),
      duration: z.string()
    })).optional()
  })
});

// Art/Photography collection
const art = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/art" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string().optional(),
    date: z.date(),
    category: z.enum(['photography', 'digital', 'traditional']),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional()
  })
});

// Books collection
const books = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/books" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    coverImage: z.string(),
    publishDate: z.date().optional(),
    status: z.enum(['published', 'upcoming', 'draft']),
    externalLink: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

// Export all collections
export const collections = { blog, projects, albums, art, books };
