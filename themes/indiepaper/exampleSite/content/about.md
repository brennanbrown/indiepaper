---
title: "About Indiepaper"
---

Indiepaper is a Hugo theme designed for writers who value simplicity, accessibility, and ownership of their content. It draws inspiration from Medium's clean typography but implements it with a brutalist, smolweb approach.

## Design Philosophy

The theme is built on these principles:

1. **Content First**: Your words are the focus. No distractions, no unnecessary decorations.
2. **Semantic HTML**: Every element has meaning and purpose, ensuring accessibility and SEO.
3. **IndieWeb Native**: Own your content with built-in support for webmentions, micropub, and other decentralized protocols.
4. **Performance**: Fast loading times with minimal resources—perfect for all devices and connections.
5. **Accessibility**: WCAG 2.1 AA compliance ensures everyone can access your content.

## Technical Details

- Single CSS file (`style.css`) with no embedded fonts
- System font stacks for optimal performance
- Semantic HTML5 structure
- Microformats2 for IndieWeb compatibility
- Print-friendly styles included
- Dark mode support via CSS media queries

## Performance Scores

Indiepaper achieves perfect scores across all Lighthouse audits:

<a href="https://pagespeed.web.dev/analysis/https-indiepaper-netlify-app/w7qcxc6lf4?form_factor=desktop" target="_blank" rel="noopener">
  <img src="/lighthouse.jpg" alt="Lighthouse Performance Scores - 100% across all categories" class="lighthouse-screenshot">
</a>

## How to Use Indiepaper

### Option 1: Hugo Module (Recommended)

```bash
# In your Hugo site directory
hugo mod init github.com/yourusername/yoursite
hugo mod get github.com/brennanbrown/indiepaper
```

Add to your `hugo.toml`:
```toml
[module]
  [[module.imports]]
    path = "github.com/brennanbrown/indiepaper"
```

### Option 2: Git Submodule

```bash
# In your Hugo site directory
git submodule add https://github.com/brennanbrown/indiepaper themes/indiepaper
```

Add to your `hugo.toml`:
```toml
theme = "indiepaper"
```

### Option 3: Direct Download

<a href="/indiepaper-theme.zip" download class="download-link">
  📦 Download Indiepaper Theme (.zip)
</a>

Extract the zip to your `themes/` directory and add `theme = "indiepaper"` to your `hugo.toml`.

### Configuration

Basic configuration in `hugo.toml`:
```toml
[params]
  description = "Your site description"
  motto = "Your site motto"
  
  [params.author]
    name = "Your Name"
    email = "your@email.com"
    url = "https://yoursite.com"
    bio = "Your bio"
```

### Content Structure

Create content in `content/post/` with front matter:
```yaml
---
title: "Your Post Title"
date: 2026-01-01T00:00:00-07:00
draft: false
summary: "Brief description"
tags: ["tag1", "tag2"]
categories: ["category1"]
---
```

## Author

Created by Brennan Brown, a web developer passionate about the indieweb and accessible design.
