# Art Albums Refactor - Requirements

## Overview
Refactor the art section from individual art piece pages to album-based collections, similar to the music albums structure. This reduces page overhead and provides a better browsing experience for grouped artworks.

## User Stories

### 1. As a visitor, I want to browse art albums instead of individual pieces
**Acceptance Criteria:**
- 1.1 The `/art` page displays album cards instead of individual art piece cards
- 1.2 Each album card shows a cover image, album title, and category
- 1.3 Albums can be filtered by category (photography, digital, traditional, all)
- 1.4 Clicking an album card navigates to the album detail page

### 2. As a visitor, I want to view all artworks within an album
**Acceptance Criteria:**
- 2.1 Album detail page (`/art/[album-slug]`) displays album information (title, description, date, category)
- 2.2 All artworks in the album are displayed in a grid layout
- 2.3 Each artwork shows its image with optional caption/title
- 2.4 A "Back to Gallery" link returns to the main art page
- 2.5 Artworks can be viewed in a lightbox or expanded view (optional)

### 3. As a content creator, I want to organize artworks into albums
**Acceptance Criteria:**
- 3.1 Art albums are defined in markdown files in `src/albums/` (or similar directory)
- 3.2 Album frontmatter includes: title, description, coverImage, category, date, tags (optional)
- 3.3 Artworks are defined as an array in the frontmatter with: image path, title (optional), description (optional)
- 3.4 Albums use the content collections API for type safety

### 4. As a developer, I want to maintain existing art data
**Acceptance Criteria:**
- 4.1 Existing art pieces in `src/art/` are migrated to album format
- 4.2 No art content is lost during migration
- 4.3 Image paths remain valid or are updated accordingly

## Technical Considerations

### Content Structure
```markdown
---
title: "Album Title"
description: "Album description"
coverImage: "/images/art/album-cover.jpg"
category: "photography" # or "digital", "traditional"
date: 2024-01-15
tags: ["landscape", "nature"]
artworks:
  - image: "/images/art/photo1.jpg"
    title: "Sunset Vista"
    description: "Optional description"
  - image: "/images/art/photo2.jpg"
    title: "Mountain Peak"
---

Additional album content in markdown...
```

### Collection Schema
- Create new `artAlbums` collection in `src/content.config.ts`
- Define schema with title, description, coverImage, category, date, tags, artworks array
- Remove or deprecate existing `art` collection

### Components
- Update `ArtCard.astro` to display album information
- Create or update album detail page at `src/pages/art/[...slug].astro`
- Add artwork grid component for displaying images within an album

### Pages
- Update `src/pages/art.astro` to fetch and display albums
- Update `src/pages/art/[...slug].astro` to display album details and artworks

## Migration Strategy

1. Create new `artAlbums` collection schema
2. Create sample album markdown files
3. Update art listing page to use albums
4. Update art detail page to show album contents
5. Migrate existing art pieces into albums
6. Remove old art collection and files
7. Update navigation and links

## Out of Scope
- Advanced lightbox/gallery viewer (can be added later)
- Artwork commenting or social features
- Album sorting/ordering beyond date and category

## Questions for User
1. Should we keep individual art pieces or group them all into albums?
2. How many artworks per album on average?
3. Do you want a lightbox/modal view for clicking on artworks within an album?
4. Should albums support multiple categories or just one?
