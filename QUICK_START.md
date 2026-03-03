# Quick Start Guide

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### 3. Add Your Content

#### Replace Example Files
Delete or rename the example files (prefixed with `_`):
- `src/projects/_example-project.md`
- `src/albums/_example-album.md`
- `src/art/_example-art.md`
- `src/books/_example-book.md`

#### Add Your Projects
Create `src/projects/my-project.md`:
```markdown
---
title: "My AWS Lambda Project"
description: "Automated deployment pipeline"
image: "/images/projects/lambda.jpg"
tags: ["AWS", "Python", "Lambda"]
github: "https://github.com/yourusername/project"
featured: true
order: 1
---

Project details here...
```

#### Add Your Music
Create `src/albums/my-album.md`:
```markdown
---
title: "My Album"
artist: "Voxide"
releaseDate: 2024-01-15
coverImage: "/images/albums/cover.jpg"
description: "Album description"
spotify: "https://open.spotify.com/..."
featured: true
---

Album story here...
```

#### Add Your Art
Create `src/art/my-photo.md`:
```markdown
---
title: "Mountain Sunset"
image: "/mountain.jpeg"
date: 2024-01-01
category: "photography"
featured: true
---
```

#### Add Your Books
Create `src/books/my-book.md`:
```markdown
---
title: "My Book"
description: "Book description"
coverImage: "/images/books/cover.jpg"
status: "published"  # or "upcoming" or "draft"
externalLink: "https://books.benjaminbushnell.com/my-book"  # URL from your Writebook instance
featured: true
---

Book details here...
```

**Note**: Your books are hosted on books.benjaminbushnell.com (EC2 + Writebook). The main site just links to them.

### 4. Update Personal Information

#### Homepage (`src/pages/index.astro`)
- Line 47: Update profile image path
- Line 52: Update your name
- Line 56: Update your tagline
- Line 60: Update your bio
- Line 73-75: Update button links
- Line 78-84: Update social media links

#### Footer (`src/components/Footer.astro`)
- Lines 14-17: Update social media URLs

#### Header (`src/components/HeaderBar.astro`)
- Line 11: Update logo path

### 5. Add Images

Place your images in:
```
public/
├── profile.jpeg (your profile photo)
├── logo.png (your logo)
├── hero-background.jpeg (hero background)
└── images/
    ├── projects/
    ├── albums/
    ├── art/
    └── books/
```

### 6. Build for Production

```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

### 7. Deploy

Deploy the `dist/` folder to your hosting platform:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting

## Common Tasks

### Add a New Project
1. Create `src/projects/project-name.md`
2. Add frontmatter with title, description, tags
3. Add project image to `public/images/projects/`
4. Write project details in markdown

### Add a New Album
1. Create `src/albums/album-name.md`
2. Add frontmatter with title, artist, release date
3. Add cover image to `public/images/albums/`
4. Add streaming links

### Add New Art
1. Create `src/art/artwork-name.md`
2. Add frontmatter with title, date, category
3. Add image to `public/images/art/`

### Add a New Book
1. Create `src/books/book-name.md`
2. Add frontmatter with title, status, description
3. Add cover image to `public/images/books/`
4. Add external link to books website

### Feature Content on Homepage
Set `featured: true` in the frontmatter of any content file.

## Troubleshooting

### Build Errors
- Check for syntax errors in markdown frontmatter
- Ensure all required fields are present
- Verify image paths are correct

### Images Not Showing
- Check image paths start with `/`
- Verify images are in `public/` directory
- Check file extensions match

### Content Not Appearing
- Ensure file doesn't start with `_` (underscore)
- Check frontmatter is valid YAML
- Verify required fields are present

## File Naming

- Use lowercase
- Use hyphens for spaces: `my-project.md`
- Avoid special characters
- Keep names descriptive

## Tips

1. **Optimize Images**: Compress images before uploading
2. **Test Locally**: Always test changes with `npm run dev`
3. **Git Commits**: Commit changes regularly
4. **Backup**: Keep backups of your content
5. **Mobile Test**: Check responsive design on mobile

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Markdown Guide](https://www.markdownguide.org)
- See `CONTENT_GUIDE.md` for detailed content instructions
- See `DESIGN_NOTES.md` for design system details

## Support

For issues or questions:
1. Check the documentation files
2. Review example content files
3. Check Astro documentation
4. Verify syntax in frontmatter

---

**Ready to go!** Start by adding your first project or album, then build from there.
