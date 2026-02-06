# Indiepaper Hugo Theme Specification

**Repository:** https://github.com/brennanbrown/indiepaper  
**Version:** 1.0.0  
**Philosophy:** Brutalist, smolweb-compliant, accessibility-first, indieweb-native

---

## Design Philosophy

A monochrome, brutalist Medium-inspired Hugo blog theme that prioritizes:
- **Smolweb compliance**: Minimal, semantic HTML with efficient CSS
- **Accessibility**: WCAG 2.1 AA compliance from foundation
- **IndieWeb**: Full support for decentralized web protocols
- **Typography**: Strong, beautiful type hierarchy despite minimalism
- **Performance**: Fast loading, minimal compute, works everywhere

---

## Color Palette

**Monochrome/Greyscale Only:**
- Pure Black: `#000000`
- Dark Grey: `#333333`
- Medium Grey: `#666666`
- Light Grey: `#999999`
- Off-White: `#f5f5f5`
- Pure White: `#ffffff`

**Usage:**
- Background: `#ffffff` (light mode) / `#000000` (dark mode)
- Text: `#000000` (light mode) / `#f5f5f5` (dark mode)
- Borders/Rules: `#333333` or `#999999`
- Meta information: `#666666`

---

## Typography System

### Font Stacks (No Embeds)

**Headers (Geometric Humanist):**
```css
font-family: Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
font-weight: 900;
```

**Body (Old Style):**
```css
font-family: 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;
font-weight: normal;
```

**Meta/Code (Monospace):**
```css
font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
font-weight: normal;
```

### Type Scale (rem-based)

**Base:**
```css
html {
  font-size: 100%; /* Respects user preferences */
}
```

**Hierarchy:**
- `h1`: 2.5rem (40px @ 16px base)
- `h2`: 2rem (32px)
- `h3`: 1.6rem (25.6px)
- `h4`: 1.4rem (22.4px)
- `h5`: 1.2rem (19.2px)
- `h6`: 1rem (16px)
- `body`: 1.125rem (18px) — Medium-style larger body text
- `small`, `.meta`: 0.875rem (14px)
- `code`, `pre`: 0.9rem (14.4px)

**Line Heights:**
- Headers: 1.2
- Body: 1.75 (generous for readability)
- Code: 1.5

**Measure (Line Length):**
- Max-width: 65ch (optimal reading measure)

---

## Layout Structure

### Single Column, Centered

```
┌─────────────────────────────────────┐
│         <header>                     │
│  ┌──────────────────────────────┐  │
│  │  Site Title                   │  │
│  │  <nav> (About|Tags|Archive)   │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         <main>                       │
│  ┌──────────────────────────────┐  │
│  │                               │  │
│  │  Content (max-width: 65ch)    │  │
│  │                               │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         <footer>                     │
│  ┌──────────────────────────────┐  │
│  │  Copyright, Email, Support    │  │
│  │  Brief Motto                  │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Container:**
```css
.container {
  max-width: 65ch;
  margin: 0 auto;
  padding: 0 1rem;
}
```

**No responsive CSS needed** — single column naturally adapts to mobile.

---

## HTML Structure Requirements

### Document Declaration

**Every page MUST include:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self';">
  
  <!-- Title & Description -->
  <title>{{ .Title }} | {{ .Site.Title }}</title>
  <meta name="description" content="{{ .Description | default .Summary }}">
  
  <!-- Stylesheet -->
  <link href="/style.css" rel="stylesheet">
  
  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/favicon.png" type="image/png">
  
  <!-- SEO & IndieWeb (see sections below) -->
</head>
```

### Semantic HTML Elements

**MUST use these semantic tags appropriately:**

- `<header>` — Site header with h-card
- `<footer>` — Site footer with copyright/contact
- `<main>` — Primary content area
- `<nav>` — Navigation menus
- `<article>` — Blog post (h-entry)
- `<section>` — Thematic grouping within pages
- `<aside>` — Tangential content, sidebars
- `<details>` / `<summary>` — Expandable content
- `<figure>` / `<figcaption>` — Images with captions
- `<thead>`, `<tbody>`, `<tfoot>` — Table structure
- `<data>` — Machine-readable data

**Tag nesting rules:**
- Never misnest: `<b><i>text</b></i>` ❌
- Always close: `<li>Item</li>` ✅

---

## CSS Architecture

### File Structure

```
/static/
  style.css          # Single CSS file
  /fonts/            # EMPTY (no embedded fonts)
```

### CSS Sections (in order)

1. **CSS Reset/Normalize**
2. **Root Variables** (colors, spacing)
3. **Base Typography**
4. **Layout** (header, main, footer, nav)
5. **Components** (article, section, aside, etc.)
6. **Utilities** (screen reader only, etc.)
7. **Print Styles** (@media print)

### Minimal CSS Rules

**Avoid:**
- Float layouts (use vertical stacking)
- Complex selectors (low specificity)
- Redundant declarations
- Non-semantic classes

**CSS for Each Semantic Element:**

```css
/* <header> */
header {
  border-bottom: 2px solid #333;
  padding: 2rem 0;
  margin-bottom: 3rem;
}

/* <footer> */
footer {
  border-top: 2px solid #333;
  padding: 2rem 0;
  margin-top: 3rem;
  font-size: 0.875rem;
  color: #666;
}

/* <main> */
main {
  min-height: 60vh;
}

/* <nav> */
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* <article> */
article {
  margin-bottom: 4rem;
}

article header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

/* <section> */
section {
  margin: 2rem 0;
}

/* <aside> */
aside {
  border-left: 3px solid #333;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
}

/* <details> / <summary> */
details {
  border: 1px solid #999;
  padding: 1rem;
  margin: 1rem 0;
}

summary {
  cursor: pointer;
  font-weight: 700;
}

/* <figure> / <figcaption> */
figure {
  margin: 2rem 0;
}

figcaption {
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
  margin-top: 0.5rem;
  text-align: center;
}

/* <thead>, <tbody>, <tfoot> */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
}

thead {
  border-bottom: 2px solid #333;
}

tbody tr {
  border-bottom: 1px solid #ccc;
}

tfoot {
  border-top: 2px solid #333;
  font-weight: 700;
}

th, td {
  text-align: left;
  padding: 0.75rem;
}

/* <data> */
data {
  font-family: ui-monospace, monospace;
  background: #f5f5f5;
  padding: 0.2em 0.4em;
}
```

### Print Styles

```css
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  a, a:visited {
    text-decoration: underline;
  }
  
  a[href]::after {
    content: " (" attr(href) ")";
  }
  
  abbr[title]::after {
    content: " (" attr(title) ")";
  }
  
  header nav,
  footer aside,
  .webmentions {
    display: none;
  }
  
  article {
    page-break-after: always;
  }
  
  h2, h3 {
    page-break-after: avoid;
  }
  
  pre, blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  
  img {
    max-width: 100% !important;
  }
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  html {
    background: #000;
    color: #f5f5f5;
  }
  
  a {
    color: #fff;
  }
  
  header, footer {
    border-color: #666;
  }
  
  code, pre {
    background: #222;
  }
}
```

---

## Page Templates

### Homepage (`layouts/index.html`)

**Structure:**
```html
<header class="h-card">
  <h1 class="p-name">{{ .Site.Title }}</h1>
  <nav>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/tags">Tags</a></li>
      <li><a href="/archive">Archive</a></li>
      <li><a href="/feed.xml">RSS</a></li>
    </ul>
  </nav>
</header>

<main class="h-feed">
  <h2 class="p-name">Recent Posts</h2>
  
  {{ range first 10 .Site.RegularPages }}
  <article class="h-entry">
    <header>
      <h3 class="p-name">
        <a href="{{ .Permalink }}" class="u-url">{{ .Title }}</a>
      </h3>
      <div class="meta">
        <time class="dt-published" datetime="{{ .Date.Format "2006-01-02" }}">
          {{ .Date.Format "January 2, 2006" }}
        </time>
        <span class="tags">
          {{ range .Params.tags }}
          <a href="/tags/{{ . | urlize }}" class="p-category">{{ . }}</a>
          {{ end }}
        </span>
        <data value="{{ .WordCount }}">{{ .WordCount }} words</data>
      </div>
    </header>
    <div class="p-summary">
      {{ if .Params.summary }}
        {{ .Params.summary }}
      {{ else }}
        {{ .Summary }}
      {{ end }}
    </div>
  </article>
  {{ end }}
</main>

<footer>
  <!-- See footer section -->
</footer>
```

### Single Post (`layouts/_default/single.html`)

**Structure:**
```html
<main>
  <article class="h-entry">
    <header>
      <h1 class="p-name">{{ .Title }}</h1>
      <div class="meta">
        <time class="dt-published" datetime="{{ .Date.Format "2006-01-02" }}">
          {{ .Date.Format "January 2, 2006" }}
        </time>
        {{ if .Params.updated }}
        <time class="dt-updated" datetime="{{ .Params.updated }}">
          Updated: {{ dateFormat "January 2, 2006" .Params.updated }}
        </time>
        {{ end }}
        <span class="tags">
          {{ range .Params.tags }}
          <a href="/tags/{{ . | urlize }}" class="p-category">{{ . }}</a>
          {{ end }}
        </span>
        <data value="{{ .WordCount }}">{{ .WordCount }} words</data>
        <data value="{{ .ReadingTime }}">{{ .ReadingTime }} min read</data>
      </div>
    </header>
    
    <div class="e-content">
      {{ .Content }}
    </div>
    
    <footer>
      <a href="{{ .Permalink }}" class="u-url">Permalink</a>
      <a href="{{ .Site.Params.author.url }}" class="p-author h-card" rel="author">
        {{ .Site.Params.author.name }}
      </a>
    </footer>
  </article>
  
  <!-- Webmentions -->
  <section class="webmentions" id="webmentions">
    <h2>Mentions</h2>
    <div id="webmentions-container"></div>
  </section>
</main>
```

---

## IndieWeb Features

### Microformats2

**h-card (Author/Site Identity):**
```html
<div class="h-card">
  <a href="{{ .Site.Params.author.url }}" class="u-url p-name" rel="me">
    {{ .Site.Params.author.name }}
  </a>
  <a href="mailto:{{ .Site.Params.author.email }}" class="u-email" rel="me">
    {{ .Site.Params.author.email }}
  </a>
  <p class="p-note">{{ .Site.Params.author.bio }}</p>
</div>
```

**h-entry (Blog Post):**
- `.h-entry` on `<article>`
- `.p-name` on title
- `.u-url` on permalink
- `.dt-published` on publish date
- `.dt-updated` on update date (if exists)
- `.p-author` on author
- `.p-category` on tags
- `.e-content` on post content
- `.p-summary` on excerpt

**h-feed (Post List):**
- `.h-feed` on post list container
- `.p-name` on feed title

### Webmentions (webmention.io)

**Configuration in `config.toml`:**
```toml
[params.webmention]
  username = "brennanbrown"  # webmention.io username
  endpoint = "https://webmention.io/brennanbrown.ca/webmention"
  pingback = "https://webmention.io/brennanbrown.ca/xmlrpc"
```

**HTML in `<head>`:**
```html
<link rel="webmention" href="{{ .Site.Params.webmention.endpoint }}">
<link rel="pingback" href="{{ .Site.Params.webmention.pingback }}">
```

**JavaScript for Display (inline in template):**
```html
<script>
(function() {
  const url = window.location.href;
  const container = document.getElementById('webmentions-container');
  
  fetch(`https://webmention.io/api/mentions.jf2?target=${encodeURIComponent(url)}`)
    .then(res => res.json())
    .then(data => {
      if (!data.children || data.children.length === 0) {
        container.innerHTML = '<p>No mentions yet.</p>';
        return;
      }
      
      const mentions = data.children.map(m => {
        const author = m.author || {};
        const published = new Date(m.published || m['wm-received']);
        return `
          <div class="webmention">
            <cite><a href="${m.url}">${author.name || 'Anonymous'}</a></cite>
            <time datetime="${published.toISOString()}">${published.toLocaleDateString()}</time>
            ${m.content ? `<p>${m.content.text || m.content.html}</p>` : ''}
          </div>
        `;
      }).join('');
      
      container.innerHTML = mentions;
    })
    .catch(err => {
      container.innerHTML = '<p>Could not load mentions.</p>';
    });
})();
</script>
```

### IndieAuth (rel-me)

**In site header or footer:**
```html
<a href="https://github.com/brennanbrown" rel="me">GitHub</a>
<a href="https://mastodon.social/@brennanbrown" rel="me">Mastodon</a>
<a href="mailto:{{ .Site.Params.author.email }}" rel="me">Email</a>
```

### POSSE (Publish Own Site, Syndicate Elsewhere)

**In post front matter:**
```yaml
syndication:
  - https://bsky.app/profile/username/post/123456789
  - https://mastodon.social/@username/123456789
```

**In template:**
```html
{{ if .Params.syndication }}
<div class="syndication">
  <p>Also on:</p>
  <ul>
    {{ range .Params.syndication }}
    <li><a href="{{ . }}" class="u-syndication" rel="syndication">{{ . }}</a></li>
    {{ end }}
  </ul>
</div>
{{ end }}
```

### Multiple Feed Formats

**RSS/Atom (`layouts/index.xml`):**
```xml
{{ printf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>" | safeHTML }}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ .Site.Title }}</title>
    <link>{{ .Site.BaseURL }}</link>
    <description>{{ .Site.Params.description }}</description>
    <language>{{ .Site.LanguageCode }}</language>
    <lastBuildDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" }}</lastBuildDate>
    <atom:link href="{{ .Site.BaseURL }}feed.xml" rel="self" type="application/rss+xml"/>
    {{ range first 20 .Site.RegularPages }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" }}</pubDate>
      <guid>{{ .Permalink }}</guid>
      <description>{{ .Summary | html }}</description>
    </item>
    {{ end }}
  </channel>
</rss>
```

**JSON Feed (`layouts/index.json`):**
```json
{
  "version": "https://jsonfeed.org/version/1.1",
  "title": "{{ .Site.Title }}",
  "home_page_url": "{{ .Site.BaseURL }}",
  "feed_url": "{{ .Site.BaseURL }}feed.json",
  "description": "{{ .Site.Params.description }}",
  "icon": "{{ .Site.BaseURL }}favicon.png",
  "authors": [
    {
      "name": "{{ .Site.Params.author.name }}",
      "url": "{{ .Site.Params.author.url }}"
    }
  ],
  "language": "{{ .Site.LanguageCode }}",
  "items": [
    {{ range $index, $page := first 20 .Site.RegularPages }}
    {{ if $index }},{{ end }}
    {
      "id": "{{ .Permalink }}",
      "url": "{{ .Permalink }}",
      "title": "{{ .Title }}",
      "content_html": {{ .Content | jsonify }},
      "summary": {{ .Summary | jsonify }},
      "date_published": "{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}",
      "tags": {{ .Params.tags | jsonify }}
    }
    {{ end }}
  ]
}
```

**Links in `<head>`:**
```html
<link rel="alternate" type="application/rss+xml" href="/feed.xml" title="{{ .Site.Title }}">
<link rel="alternate" type="application/feed+json" href="/feed.json" title="{{ .Site.Title }}">
<link rel="alternate" type="application/atom+xml" href="/feed.xml" title="{{ .Site.Title }}">
```

---

## SEO & Meta Tags

### Complete `<head>` SEO Block

```html
<!-- Primary Meta Tags -->
<title>{{ .Title }} | {{ .Site.Title }}</title>
<meta name="title" content="{{ .Title }} | {{ .Site.Title }}">
<meta name="description" content="{{ .Description | default .Summary | default .Site.Params.description }}">
<meta name="author" content="{{ .Site.Params.author.name }}">
<meta name="keywords" content="{{ delimit .Params.tags ", " }}">

<!-- Canonical URL -->
<link rel="canonical" href="{{ .Permalink }}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}">
<meta property="og:url" content="{{ .Permalink }}">
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ .Description | default .Summary | default .Site.Params.description }}">
<meta property="og:site_name" content="{{ .Site.Title }}">
{{ if .Params.image }}
<meta property="og:image" content="{{ .Site.BaseURL }}{{ .Params.image }}">
{{ end }}

<!-- Bluesky -->
<meta property="bluesky:card" content="summary{{ if .Params.image }}_large_image{{ end }}">
<meta property="bluesky:url" content="{{ .Permalink }}">
<meta property="bluesky:title" content="{{ .Title }}">
<meta property="bluesky:description" content="{{ .Description | default .Summary | default .Site.Params.description }}">
{{ if .Site.Params.author.bluesky }}
<meta property="bluesky:creator" content="@{{ .Site.Params.author.bluesky }}">
{{ end }}
{{ if .Params.image }}
<meta property="bluesky:image" content="{{ .Site.BaseURL }}{{ .Params.image }}">
{{ end }}

<!-- Article Metadata (for blog posts) -->
{{ if .IsPage }}
<meta property="article:published_time" content="{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}">
{{ if .Params.updated }}
<meta property="article:modified_time" content="{{ dateFormat "2006-01-02T15:04:05Z07:00" .Params.updated }}">
{{ end }}
<meta property="article:author" content="{{ .Site.Params.author.name }}">
{{ range .Params.tags }}
<meta property="article:tag" content="{{ . }}">
{{ end }}
{{ end }}

<!-- Robots -->
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">

<!-- Geo Tags (if applicable) -->
{{ if .Site.Params.location }}
<meta name="geo.region" content="{{ .Site.Params.location.region }}">
<meta name="geo.placename" content="{{ .Site.Params.location.placename }}">
{{ end }}
```

---

## Accessibility (a11y)

### WCAG 2.1 AA Compliance

**Requirements:**
1. **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
2. **Keyboard Navigation**: All interactive elements accessible via keyboard
3. **Focus Indicators**: Visible focus states on all interactive elements
4. **Skip Links**: "Skip to main content" link at top of page
5. **Semantic HTML**: Proper heading hierarchy, landmarks
6. **Alt Text**: Descriptive alt text on all images
7. **Form Labels**: Explicit labels for all form inputs
8. **Link Text**: Descriptive link text (no "click here")

### Accessibility Features

**Skip Link:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

**Focus Styles:**
```css
a:focus,
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 3px solid #000;
  outline-offset: 2px;
}
```

**ARIA Landmarks:**
```html
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<aside role="complementary" aria-label="Related content">
<footer role="contentinfo">
```

**Screen Reader Only Class:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Language Declaration:**
```html
<html lang="en">
```

**Heading Hierarchy:**
- Only one `<h1>` per page
- No skipped levels (h1 → h3)
- Logical document outline

**Image Alt Text:**
```html
<!-- Informative images -->
<img src="chart.png" alt="Bar chart showing 50% increase in sales from 2023 to 2024">

<!-- Decorative images -->
<img src="decoration.png" alt="" role="presentation">
```

**Link Accessibility:**
```html
<!-- Bad -->
<a href="/post">Click here</a>

<!-- Good -->
<a href="/post">Read more about brutalist web design</a>

<!-- With aria-label if needed -->
<a href="/post" aria-label="Read more about brutalist web design">Read more</a>
```

---

## Footer Structure

```html
<footer role="contentinfo">
  <div class="container">
    <div class="footer-content">
      <!-- Copyright -->
      <p class="copyright">
        &copy; {{ now.Year }} {{ .Site.Params.author.name }}.
        Content licensed under 
        <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">
          CC BY 4.0
        </a>.
        Code licensed under 
        <a href="https://opensource.org/licenses/MIT" rel="license">
          MIT
        </a>.
      </p>
      
      <!-- Contact -->
      <p class="contact">
        Email: 
        <a href="mailto:{{ .Site.Params.author.email }}" class="u-email" rel="me">
          {{ .Site.Params.author.email }}
        </a>
      </p>
      
      <!-- Support -->
      <p class="support">
        Support: 
        <a href="{{ .Site.Params.support.url }}" rel="me">
          {{ .Site.Params.support.text }}
        </a>
      </p>
      
      <!-- Motto/Blurb -->
      <p class="motto">
        {{ .Site.Params.motto }}
      </p>
    </div>
  </div>
</footer>
```

---

## Hugo Configuration

### `config.toml` Example

```toml
baseURL = "https://brennanbrown.ca/"
languageCode = "en-us"
title = "Indiepaper"
theme = "indiepaper"

# Pagination
paginate = 10

# Output formats
[outputs]
  home = ["HTML", "RSS", "JSON"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]

# RSS Configuration
[outputFormats.RSS]
  mediaType = "application/rss+xml"
  baseName = "feed"

[outputFormats.JSON]
  mediaType = "application/feed+json"
  baseName = "feed"
  isPlainText = true

# Site Parameters
[params]
  description = "A brutalist, smolweb blog about design, code, and the indie web."
  motto = "Write less. Mean more."
  
  # Author Information (h-card)
  [params.author]
    name = "Brennan Brown"
    email = "mail@brennanbrown.ca"
    url = "https://brennanbrown.ca"
    bio = "Writer, developer, and advocate for the small web."
    bluesky = "brennanbrown"  # Optional
  
  # Location (optional, for SEO)
  [params.location]
    region = "CA-AB"
    placename = "Grande Prairie, Alberta"
  
  # Support/Donation
  [params.support]
    url = "https://ko-fi.com/brennanbrown"
    text = "Buy me a coffee"
  
  # Webmentions
  [params.webmention]
    username = "brennanbrown"
    endpoint = "https://webmention.io/brennanbrown.ca/webmention"
    pingback = "https://webmention.io/brennanbrown.ca/xmlrpc"

# Taxonomies
[taxonomies]
  tag = "tags"
  category = "categories"

# Markup
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = false
  [markup.highlight]
    style = "monochrome"
    lineNos = false
    noClasses = false

# Sitemap
[sitemap]
  changefreq = "weekly"
  priority = 0.5
  filename = "sitemap.xml"

# Privacy
[privacy]
  [privacy.youtube]
    privacyEnhanced = true
```

---

## Front Matter Schema

### Post Front Matter

```yaml
---
title: "The Beauty of Brutalist Web Design"
date: 2024-01-15T10:00:00-07:00
updated: 2024-01-20T15:30:00-07:00  # Optional
draft: false
tags:
  - design
  - web
  - minimalism
categories:
  - essays
summary: "Exploring the principles of brutalist design on the modern web."
description: "A deep dive into brutalist web design principles and their relevance to the smolweb movement."
image: "/images/brutalist-design.png"  # Optional
syndication:  # Optional, for POSSE
  - https://bsky.app/profile/brennanbrown/post/123456789
  - https://mastodon.social/@brennanbrown/123456789
---
```

---

## Image Handling

### Smolweb-Compliant Images

**Requirements:**
1. **Mandatory alt text** on all images
2. **Optimize file size** (prefer WebP, optimize JPG/PNG)
3. **Provide smaller versions** with links to larger
4. **No autoplay** for video/audio
5. **Controls required** for media

**Example:**
```html
<figure>
  <a href="/images/full-size.webp">
    <img src="/images/thumbnail.webp" 
         alt="Detailed description of the image" 
         width="800" 
         height="600"
         loading="lazy">
  </a>
  <figcaption>Caption describing the image context</figcaption>
</figure>
```

**Hugo Shortcode for Images:**
```html
<!-- layouts/shortcodes/img.html -->
<figure>
  {{ if .Get "link" }}
  <a href="{{ .Get "link" }}">
  {{ end }}
    <img src="{{ .Get "src" }}" 
         alt="{{ .Get "alt" }}" 
         {{ with .Get "width" }}width="{{ . }}"{{ end }}
         {{ with .Get "height" }}height="{{ . }}"{{ end }}
         loading="lazy">
  {{ if .Get "link" }}
  </a>
  {{ end }}
  {{ with .Get "caption" }}
  <figcaption>{{ . }}</figcaption>
  {{ end }}
</figure>
```

**Usage in Markdown:**
```markdown
{{< img src="/images/photo.webp" 
        alt="A beautiful sunset over the mountains" 
        caption="Sunset in the Rockies"
        link="/images/photo-full.webp" >}}
```

---

## JavaScript Policy

### Smolweb JavaScript Rules

**MUST:**
- All JavaScript inline via `<script>` tags OR from same host
- Site MUST work without JavaScript
- NO external CDNs or third-party scripts
- Set CSP header: `default-src 'self';`

**ALLOWED:**
- Webmentions display (progressive enhancement)
- Theme toggle (dark/light mode)
- Optional enhancements that don't break core functionality

**Example Theme Toggle (inline):**
```html
<script>
(function() {
  const toggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  const theme = localStorage.getItem('theme') || 
                (prefersDark.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
</script>
```

**NO JavaScript allowed:**
- Analytics tracking scripts
- Social media widgets
- Ad networks
- External fonts
- Polyfills from CDN

---

## Content Security Policy

### CSP Header Configuration

**Nginx:**
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' webmention.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self';";
```

**Meta Tag (if headers unavailable):**
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' webmention.io;">
```

---

## Performance Targets

### Smolweb Performance Goals

**Page Weight:**
- HTML: < 30 KB
- CSS: < 10 KB
- JavaScript: < 5 KB (ideally 0 KB)
- Images: Optimized, < 100 KB each
- **Total page weight: < 100 KB**

**Load Times:**
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Full page load: < 3s (on 3G)

**Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Testing Checklist

### Pre-Launch Testing

**Smolweb Compliance:**
- [ ] Page loads without CSS
- [ ] Page loads without JavaScript
- [ ] Works in text-only browsers (Lynx, w3m)
- [ ] Total page weight < 100 KB
- [ ] No external resources (CDNs, fonts)
- [ ] CSP header set correctly

**Accessibility:**
- [ ] WCAG 2.1 AA compliant (use axe DevTools)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible (test with NVDA/JAWS)
- [ ] Color contrast passes
- [ ] Proper heading hierarchy
- [ ] Skip links functional
- [ ] Focus indicators visible

**IndieWeb:**
- [ ] Microformats2 validated (use https://indiewebify.me/)
- [ ] h-card present and valid
- [ ] h-entry on posts
- [ ] Webmention endpoints configured
- [ ] rel-me links present
- [ ] RSS/JSON feeds valid

**SEO:**
- [ ] robots.txt present
- [ ] sitemap.xml generated
- [ ] Canonical URLs set
- [ ] Open Graph tags present
- [ ] Bluesky Cards configured
- [ ] Structured data valid (Google Rich Results Test)

**Cross-Browser:**
- [ ] Firefox
- [ ] Chrome/Chromium
- [ ] Safari
- [ ] Edge
- [ ] Lynx/w3m (text browsers)

**Mobile:**
- [ ] Responsive (single column auto-adapts)
- [ ] Touch targets > 48×48px
- [ ] No horizontal scroll
- [ ] Readable without zoom

**Print:**
- [ ] Print stylesheet works
- [ ] Unnecessary elements hidden
- [ ] Link URLs shown
- [ ] Good page breaks

---

## Development Workflow

### File Structure

```
indiepaper/
├── archetypes/
│   └── default.md           # Default front matter template
├── assets/                  # (empty - no build process)
├── content/
│   ├── _index.md
│   ├── about.md
│   ├── posts/
│   │   ├── _index.md
│   │   └── my-first-post.md
│   └── tags/
│       └── _index.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template
│   │   ├── single.html      # Single post
│   │   └── list.html        # List pages
│   ├── partials/
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── nav.html
│   │   └── webmentions.html
│   ├── index.html           # Homepage
│   ├── index.xml            # RSS feed
│   └── index.json           # JSON feed
├── static/
│   ├── style.css            # Single CSS file
│   ├── favicon.ico
│   ├── favicon.png
│   └── robots.txt
├── config.toml
└── README.md
```

### Build Commands

```bash
# Development server
hugo server -D

# Build for production
hugo --minify

# Validate HTML
tidy -q -e public/index.html

# Check accessibility
pa11y public/index.html

# Test in Lynx
lynx public/index.html

# Measure performance
lighthouse public/index.html --view
```

---

## License & Credits

### Theme License

```
MIT License

Copyright (c) 2024 Brennan Brown

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Content License

All blog content licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).

---

## References & Resources

### Smolweb
- [Smolweb Guidelines](https://smolweb.org/)
- [CSS Grading Guide](https://smolweb.org/css-grading.html)
- [HTML Subset](https://smolweb.org/subset.html)

### IndieWeb
- [IndieWeb Wiki](https://indieweb.org/)
- [Microformats2](https://microformats.org/wiki/microformats2)
- [Webmention.io](https://webmention.io/)
- [IndieWebify.me](https://indiewebify.me/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

### Typography
- [Modern Font Stacks](https://modernfontstacks.com/)
- [Practical Typography](https://practicaltypography.com/)

### Tools
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [pa11y](https://pa11y.org/)

---

**End of Specification**

Version 1.0.0 | Last Updated: February 3, 2026