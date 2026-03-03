# Books Subdomain Integration Guide

## Overview

Your books subdomain (`books.benjaminbushnell.com`) is already hosted on an EC2 instance with Writebook installed. This guide explains how the main portfolio site integrates with your existing books site.

## Current Architecture

```
benjaminbushnell.com (Main Portfolio Site - This Astro Site)
├── Portfolio/Projects
├── Music
├── Art
├── Blog
└── Books (overview page with links to books.benjaminbushnell.com)

books.benjaminbushnell.com (Books Site - EC2 + Writebook)
├── Book 1 (full content)
├── Book 2 (full content)
└── Book 3 (full content)
```

## Main Site Integration (Already Complete)

### Books Overview Page
- Located at `/books` on main site
- Shows all books with status badges (published, upcoming, draft)
- Links to individual book detail pages on main site
- Prominent "Visit Books Website" button linking to books.benjaminbushnell.com

### Book Detail Pages
- Located at `/books/[slug]` on main site
- Shows book cover, description, status
- "Read on Books Website" button for published books
- Links directly to specific books on books.benjaminbushnell.com

### Homepage Integration
- Can feature books in the homepage sections
- Shows featured books with links to detail pages
- Links to books overview page

## How to Use

### Adding a New Book

1. **Create book entry on main site** (`src/books/my-book.md`):
```markdown
---
title: "My Book Title"
subtitle: "Optional Subtitle"
description: "Brief description for the main site"
coverImage: "/images/books/my-book-cover.jpg"
publishDate: 2025-06-01
status: "published"  # or "upcoming" or "draft"
externalLink: "https://books.benjaminbushnell.com/my-book"
featured: true
---

Extended synopsis and information about the book.
This appears on the book detail page on the main site.
```

2. **Add book cover image**:
   - Place cover in `public/images/books/my-book-cover.jpg`

3. **Publish on Writebook**:
   - Add full book content to your Writebook instance
   - Note the URL (e.g., `https://books.benjaminbushnell.com/my-book`)
   - Use this URL in the `externalLink` field above

### Content Flow

1. User visits `benjaminbushnell.com`
2. Clicks "Books" in navigation
3. Sees overview of all books at `/books`
4. Clicks on a book
5. Views book details at `/books/book-name` (on main site)
6. Clicks "Read on Books Website" button
7. Redirected to `books.benjaminbushnell.com/book-name` (Writebook)
8. Reads full book content on Writebook
9. Can navigate back to main site via browser back button

## Book Status Types

### Published
- Book is available on Writebook
- "Read on Books Website" button is shown
- Links to the Writebook URL

### Upcoming
- Book is not yet published
- Shows expected publication date
- No external link button (or disabled)
- Yellow status badge

### Draft
- Book is in progress
- Not publicly available
- Gray status badge
- No external link

## Linking Strategy

### From Main Site to Writebook

In your book markdown files, use the `externalLink` field:
```yaml
externalLink: "https://books.benjaminbushnell.com/book-name"
```

This creates the "Read on Books Website" button that links to your Writebook instance.

### From Writebook to Main Site

In your Writebook instance, you can add a link back:
```html
<a href="https://benjaminbushnell.com">← Back to Portfolio</a>
```

Or in the Writebook navigation/footer.

## Updating Book Information

### On Main Site
Update the markdown file in `src/books/`:
- Change status when published
- Update description
- Add/update external link
- Change featured status

### On Writebook
Manage full book content directly in Writebook on your EC2 instance.

## Example Book Entry

```markdown
---
title: "The Art of Cloud Architecture"
subtitle: "Building Scalable Systems on AWS"
description: "A comprehensive guide to designing and implementing cloud-native architectures using AWS services."
coverImage: "/images/books/cloud-architecture.jpg"
publishDate: 2024-12-01
status: "published"
externalLink: "https://books.benjaminbushnell.com/cloud-architecture"
featured: true
---

## About This Book

This book explores the principles and practices of building scalable, resilient cloud architectures on AWS. Drawing from years of experience as a Cloud DevOps Engineer, it covers:

- Infrastructure as Code best practices
- Serverless architecture patterns
- CI/CD pipeline design
- Security and compliance
- Cost optimization strategies

Perfect for developers and engineers looking to master cloud-native development.

## What Readers Are Saying

"An essential guide for anyone working with AWS..." - Reader Review

## Purchase Options

Available now on books.benjaminbushnell.com
```

## Maintenance

### Main Site
- Keep book metadata up to date
- Update status when books are published
- Add new books as markdown files
- Update cover images as needed

### Writebook (EC2)
- Manage full book content
- Handle reader interactions
- Monitor EC2 instance health
- Backup book content regularly

## SEO Considerations

### Main Site (Overview/Teasers)
- Book metadata and descriptions
- Links to full content on Writebook
- Optimized for discovery

### Writebook (Full Content)
- Complete book text
- Canonical URLs
- Reader engagement

## Analytics

Track book interest on main site:
- Page views on `/books`
- Clicks on individual book pages
- Clicks on "Read on Books Website" buttons

Track reading on Writebook:
- Full book page views
- Time on page
- Reader engagement

## Benefits of This Setup

1. **Separation of Concerns**: Portfolio site showcases work, Writebook handles reading experience
2. **Specialized Tools**: Writebook is optimized for book reading
3. **Flexibility**: Update either site independently
4. **Professional**: Main site acts as a landing page/marketing for books
5. **Scalability**: EC2 instance can be scaled for book traffic

## Quick Reference

### Main Site Files
- Book entries: `src/books/*.md`
- Book covers: `public/images/books/`
- Books page: `src/pages/books.astro`
- Book detail: `src/pages/books/[...slug].astro`

### Writebook Site
- Hosted on: EC2 instance
- URL: books.benjaminbushnell.com
- Platform: Writebook
- Content: Full book text

---

**Note**: The main site is already configured to work with your existing Writebook setup. Just add book entries with the correct `externalLink` URLs pointing to your Writebook instance.
