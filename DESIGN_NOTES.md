# Design System & Facelift Notes

## Design Philosophy

The redesigned website follows modern solo developer/artist portfolio principles:

### Color Palette
- **Primary**: Purple (#7c3aed, #9333ea) - Creative, technical
- **Background**: Black to Slate gradient - Professional, focused
- **Accents**: White with opacity for glass-morphism effects
- **Text**: White primary, Gray-300/400 secondary

### Typography
- **Headings**: Bold, large (4xl-7xl)
- **Body**: Poppins font family
- **Hierarchy**: Clear size differentiation

### Layout Principles
1. **Hero-First**: Large, impactful hero sections on each page
2. **Card-Based**: Content organized in modern cards with hover effects
3. **Grid Systems**: Responsive grids (1-2-3-4 columns)
4. **Whitespace**: Generous spacing for breathing room
5. **Fixed Navigation**: Sticky header with scroll effects

### Component Design

#### Cards
- Gradient backgrounds (white/5 to white/10)
- Border with low opacity (white/10)
- Hover effects: scale, shadow, border brightness
- Rounded corners (xl, 2xl, 3xl)

#### Buttons
- Primary: Purple gradient
- Secondary: White/10 with backdrop blur
- Hover: Transform scale + color shift

#### Images
- Rounded corners
- Border with glow effect
- Hover: Scale transform (110%)
- Aspect ratios maintained

### Sections

#### Homepage
1. **Hero**: Full-screen with profile image, gradient overlay
2. **About**: Skills showcase with icon grid
3. **Featured Work**: Latest from each category
4. **CTA**: Call-to-action for contact

#### Category Pages
- Consistent hero sections
- Grid layouts for content
- Filtering (Art page)
- Sorting by date/order

#### Detail Pages
- Two-column layouts
- Sticky sidebars
- Prose styling for markdown content
- Action buttons (external links, demos)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu on mobile
- Grid column adjustments
- Stack layouts on small screens

### Animations
- Smooth transitions (300ms)
- Hover transforms
- Fade-in effects
- Bounce animation for scroll indicator

### Accessibility
- Semantic HTML
- ARIA labels
- Focus states
- Color contrast ratios
- Keyboard navigation

## Inspiration Sources
- Modern developer portfolios (Vercel, Linear style)
- Artist portfolios (Behance, Dribbble)
- Music streaming platforms (Spotify, Apple Music)
- Photography portfolios (Unsplash, 500px)

## Key Improvements Over Original
1. **Visual Hierarchy**: Clear content organization
2. **Modern Aesthetics**: Purple gradients, glass-morphism
3. **Better Navigation**: More pages, clear structure
4. **Content Showcase**: Dedicated pages for each content type
5. **Interactivity**: Hover effects, smooth transitions
6. **Professional**: Resume-ready portfolio presentation
7. **Comprehensive**: All creative outputs in one place

## Future Enhancements
- Dark/light mode toggle
- Search functionality
- Content filtering/sorting
- Animation on scroll
- Loading states
- Image galleries with lightbox
- Contact form
- Newsletter signup
- RSS feed improvements
