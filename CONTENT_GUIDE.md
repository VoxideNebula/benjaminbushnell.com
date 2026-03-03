# Content Management Guide

This guide explains how to add and manage content for your personal website.

## Directory Structure

```
src/
├── projects/     # Portfolio projects
├── albums/       # Music albums and releases
├── art/          # Art and photography
├── books/        # Books and writings
└── blog/         # Blog posts
```

## Adding Content

### Projects

Create a new `.md` file in `src/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description of the project"
image: "/images/projects/project-name.jpg"
tags: ["AWS", "Python", "Automation"]
github: "https://github.com/username/repo"
demo: "https://demo.example.com"
featured: true
order: 1
---

## Project Details

Add your detailed project description here in markdown format.

### Features
- Feature 1
- Feature 2

### Technologies Used
- Technology 1
- Technology 2
```

### Music Albums

Create a new `.md` file in `src/albums/`:

```markdown
---
title: "Album Name"
artist: "Artist Name"
releaseDate: 2024-01-15
coverImage: "/images/albums/album-cover.jpg"
description: "Album description"
spotify: "https://open.spotify.com/album/..."
appleMusic: "https://music.apple.com/..."
soundcloud: "https://soundcloud.com/..."
youtube: "https://youtube.com/..."
featured: true
tracks:
  - title: "Track 1"
    duration: "3:45"
  - title: "Track 2"
    duration: "4:12"
---

Extended album description and story goes here.
```

### Art & Photography

Create a new `.md` file in `src/art/`:

```markdown
---
title: "Artwork Title"
image: "/images/art/artwork.jpg"
description: "Optional description"
date: 2024-01-01
category: "photography"  # or "digital" or "traditional"
featured: true
tags: ["nature", "landscape"]
---

Optional extended description of the artwork.
```

### Books

Create a new `.md` file in `src/books/`:

```markdown
---
title: "Book Title"
subtitle: "Optional Subtitle"
description: "Book description"
coverImage: "/images/books/cover.jpg"
publishDate: 2025-06-01
status: "published"  # or "upcoming" or "draft"
externalLink: "https://books.benjaminbushnell.com/book-name"
featured: true
---

Extended book synopsis and information goes here.
```

### Blog Posts

Create a new `.md` file in `src/blog/`:

```markdown
---
title: "Post Title"
pubDate: 2024-03-03
description: "Post description"
author: "Benjamin Bushnell"
image:
  url: "/images/blog/post-image.jpg"
  alt: "Image description"
tags: ["technology", "cloud", "devops"]
---

Your blog post content goes here in markdown format.
```

## Image Management

Place images in the `public/` directory:

```
public/
├── images/
│   ├── projects/
│   ├── albums/
│   ├── art/
│   ├── books/
│   └── blog/
```

Reference images in markdown using `/images/folder/filename.jpg`

## Featured Content

Set `featured: true` in the frontmatter to display content on the homepage.

## Content Order

For projects, use the `order` field to control display order (lower numbers appear first).

For other content types, items are sorted by date (most recent first).

## Building and Deploying

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tips

1. Use descriptive filenames (they become URLs)
2. Optimize images before uploading
3. Keep descriptions concise for cards
4. Use markdown for detailed content
5. Test locally before deploying
