---
title: 'Project Review: Building a Static Personal Website with Astro'
pubDate: 2026-01-29
description: 'A review of how I built my own personal website'
author: 'Benjamin Bushnell'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["project", "developer"]
---

* [Finished Product](https://www.benjaminbushnell.com)
* [Code Repository](https://github.com/VoxideNebula/benjaminbushnell.com)

This project was inspired by a friend's website. I always wanted my own homepage on the internet where I could collect and present projects from my various disciplines, and my friend's website is [pretty cool](https://www.trevorweavermusic.com/) (I _totally_ didn't have website envy).

Initially, I toyed with using Amazon Lightsail to host a WordPress site, but as a developer, I just didn't jive with WordPress's lack of customizability. Though, I did like AWS Lightsail's cheap hosting options—I will keep it in mind for future web app hosting.

Recently, however, while trying to solve a work problem, I discovered [Astro](https://astro.build/). I had been looking through the GitHub repositories of an exciting government program called [cloud.gov](https://cloud.gov) and discovered that they used Astro to build their website. Immediately, I dove in and started learning the framework.

Initially, I was excited about its compatibility with React, which is a tool I wanted to learn to pad out my resume. I was also excited about its ability to generate a static website, which I knew I could host on GitHub Pages for free. As I worked, however, I became more excited about Astro itself. Developing a simple static website with Astro is a breeze, and it's just plain fun to use. I made this website in a handful of evenings in under one week, and I'm very proud of it as my first “real” website.

So here's how I learned Astro, how I created the website, and my assessment of the project and tooling.

## Learning Astro

The very first thing I did was go through Astro's [simple blog tutorial](https://docs.astro.build/en/tutorial/0-introduction/). This worked well for me because I knew that I wanted to end up with blog functionality on my website, and I figured it wouldn't be too hard to modify the finished tutorial into my own site. Spoilers: I was right.

The thing I really appreciated about that tutorial is that it exposes you to the possibilities of Astro without overwhelming you. Once you have the basics, it's pretty easy to go from there.

Astro runs on `.astro` files. These files power everything from the pages you see to the components they’re composed of. The only time you'll stray away from Astro files is when using a framework integration (which still uses its own file types, such as `.jsx` for React) and when using Markdown for content like blog posts.

The basic layout of an Astro file has two parts: the frontmatter, where you can write JavaScript and add imports, and the main body, where you assemble components using HTML tags. This is an elegant and very readable way to organize a file.

## How I Built My Website

### Technologies Used

* Astro (obviously)
* HTML / CSS / JavaScript
* Tailwind CSS
  * I chose Tailwind because I didn’t care to learn regular CSS, and it seemed like the fastest option. I still kind of hate how it looks in the code though.
* React Astro integration
  * I added the React integration just to get some exposure to React. This ended up being the wrong choice.
* Google Gemini
  * Okay, I’m not proud of this, but I pretty much built the whole website by asking Gemini how to do each part. I assembled it component by component and generally knew what I was adding. It was faster than searching through Tailwind docs. I’m a good dev, I promise.

### Architecture Review

The main structure of the website at the time of publication is as follows:

* A Base layout component, where I plugged in the header nav and footer components. This layout is imported and used on every other page.
* A MarkDownPost layout component to wrap around my blog post markdown files
* A home page
* Blog pages generated using collections
* Blog *post* pages generated using collections
* Tag pages generated using collections (collections are great!)
* A bunch of components (everything is a component)

### General Steps and Challenges

As stated earlier, I started by following the [simple blog tutorial](https://docs.astro.build/en/tutorial/0-introduction/). This gave me a base project that I could easily modify. The website didn’t look like much at this point, but I knew the potential was there.

Next, I followed the Astro docs to add Tailwind CSS and React to the project. I knew I wanted Tailwind to make styling easier, but in retrospect, I probably didn’t need React.

With React installed, I added the `HeaderBar.jsx` component. I used React here because I figured it would be the best way to recreate the reactive header on my friend's website. What I didn't know, is that the animations are all handled by CSS, and javascript was all that was needed to trigger the animations. Eventually, I ended up having to switch from React to native Astro due to limitations with the integration. It works much better now, and I was able to add a Nav underline hint for showing which page the visitor is currently looking at.

The header turned out pretty well, in my opinion, though I had to fiddle with Tailwind to get the sizing and spacing right. This took some back-and-forth with Gemini. I added the logo later, which I created using vector curves in Affinity and only kind of don’t hate. I was still borrowing ideas from my friend’s site, but he had the unfair advantage of a graphic designer friend. I’m not terrible at design, but I’m no graphic designer.

Next, I added a footer component, which was dead simple and hardly worth discussing. However, I ran into a Safari issue: I wanted a black footer with a blue background, but Safari’s overscroll behavior would reveal a sliver of blue below the footer when scrolling to the end of the page on iPhone and macOS. This bothered me enough that I searched for a solution, but it appears to be a known Safari limitation. My solution was simply to make the background black as well. Problem solved!

Once the header and footer were complete, I plugged them into the base Astro layout from the tutorial so they could be shared across all pages.

With the layout in place, my next challenge was deciding where to put my content. At the time, I didn’t have much beyond an About Me section and a Music section with a single album, so I put all non-blog content on the home page. I plan to add Projects, Art, Music, and maybe even Books pages later. For now, a home page and blog page are sufficient.

I liked the banner photo on my friend’s website, especially how the header seemed to melt into it while scrolling. To add my own twist, I wanted the photo to stay fixed while scrolling. This caused issues on mobile devices, since the CSS used to fix the background doesn’t work reliably on mobile browsers. After some trial and error, Gemini suggested disabling the fixed behavior on narrow screens. That solved it. I then added an About Me section as its own component and imported it into the home page.

For the Music section, I wanted a list of cards, each representing an album (of which there is currently only one). Each album is encapsulated in a `MusicCard` component, manually added to the Music component. Someday I may render these from a collection, but today is not that day. The layout is straightforward: two columns that collapse into one on mobile.

At last, we get to the blog. In the original tutorial, the blog page renders a simple list of post titles. I wanted cards instead, similar to `MusicCard.astro`, so I created a `BlogCard.astro` component and adjusted the layout. Once that was done, I realized every blog post would appear on a single page. That clearly wouldn’t scale (assuming I actually write more blog posts).

So I turned to Gemini again and realized I could make the blog page a collection. A collection allows Astro to dynamically create pages based on some script. Now, when the site builds, Astro checks all posts in `src/blog/`. If there are more than six, it shows the six most recent on the first page, then creates additional paginated pages as needed. This limits each page to six posts and allows users to navigate older content. Later, I added a tag cloud showing all tags used across posts, which may get unwieldy someday, but for now it works.

Speaking of tags: the Astro tutorial includes a dedicated tags page that lists all tags. I ended up removing that page in favor of the tag cloud, but the underlying functionality remains. Clicking a tag takes you to a page listing all posts with that tag, generated via—yes—another collection. The blog tutorial actually introduces collections using these tag pages, so this was already built for me. However, this raised a question: what if a tag has more than six posts? Let's paginate it like the regular blog page!

But wait, the tag pages are already generated from a collection. How can we paginate them?

Another collection.

This time, a collection for the paginated tag pages—a sort of nested collection.

(Btw, I learned all of this from Gemini. I would not have come up with nested collections on my own.)

Finally, I had to format the actual blog post pages. These are generated by the markdown files in `/src/blog/` and use the `MarkdownPostLayout.astro` layout to format the post with the frontmatter data. They look really slick and gave me the option to easily drop in Giscus for comments and a snappy back link to the main blog page.

Once the nested tag collections were working, and my posts were rendering with professional style, the site was essentially complete: I had made a responsive header, About Me section, a music showcase, and a fully functional blog in the matter of a few days.

## Closing Thoughts

I do think my use of AI was excessive, and I want to work on future projects or components without it to build skill. I got a bit intoxicated by the speed at which I could produce results with a framework I was still learning. Thought, I can't help but wonder if using AI sucked a bit of the creativity out of the process. I tend to think that AI produces clean, but ultimately lifeless results. For now, I'm proud of what I learned. And the knowledge of what's possible with Astro, Tailwind, and React, will stick with me.

There are artifacts and unnecessary code left behind from AI-generated output, so I plan to clean those up while learning Tailwind classes and digging deeper into how collections work.

### Skills That Brought Me Success

I had a lot of prior knowledge that made this project easier.

I started with experience in HTML, CSS, and JavaScript. I learned HTML and CSS from the Jon Duckett books (still a fan of books over websites), and JavaScript from [Eloquent JavaScript](https://eloquentjavascript.net/). I have mixed feelings about that book—it’s neither beginner-friendly nor does it seem ideal for experienced developers—but it did teach me JavaScript, so I'll give it that.

I also have a bachelor’s degree in computer science from Montana State University, but how much could that have helped, really?

From my job, I already had experience with:

- AWS, including domain registration and Route 53 DNS
- Hosting static documentation sites on GitLab Pages
- Git and CI/CD

These are things I could have learned during the project, but knowing them beforehand significantly sped things up.

### Do I recommend using Astro?

For static websites, absolutely. And very likely for web apps also, but I have yet to attempt using it for that.

I don't have much experience with web development, so it's impossible for me to compare Astro with other frameworks. I can say with certainty, however, that if you are new to web development, it is excellent way to start. Astro is the first web framework that really clicked for me, and I'm sure you'll have the same results.
