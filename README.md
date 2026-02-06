# Indiepaper Hugo Theme

A monochrome, brutalist Medium-inspired Hugo blog theme that prioritizes smolweb compliance, accessibility, and IndieWeb principles.

## Philosophy

Indiepaper embodies the brutalist web design movement with a focus on:
- **Smolweb compliant**: Minimal, semantic HTML with efficient CSS
- **Accessibility first**: WCAG 2.1 AA compliance from foundation
- **IndieWeb native**: Full support for decentralized web protocols
- **Typography focused**: Strong, beautiful type hierarchy despite minimalism
- **Performance optimized**: Fast loading, minimal compute, works everywhere

## Features

- **Monochrome Design**: Pure black and white aesthetic with no embedded fonts
- **Responsive**: Single column naturally adapts to all screen sizes
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA landmarks
- **IndieWeb Ready**: Complete microformats2 support (h-card, h-entry, h-feed)
- **Webmentions**: Built-in support for webmention.io integration
- **Multiple Feeds**: RSS, JSON, and Atom feed support
- **Print Optimized**: Clean print styles with proper page breaks
- **Fast**: Single CSS file, no JavaScript required for core functionality

## Getting Started

### Installation

#### Option 1: Hugo Module (Recommended)
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

#### Option 2: Git Submodule
```bash
cd themes
git submodule add https://github.com/brennanbrown/indiepaper.git indiepaper
```

#### Option 3: Direct Download
```bash
cd themes
git clone https://github.com/brennanbrown/indiepaper.git
```

### Configuration

Add to your `hugo.toml`:
```toml
theme = "indiepaper"

[params]
  description = "Your site description"
  motto = "Your site motto"
  mainSections = ["post"]
  
  [params.author]
    name = "Your Name"
    email = "your@email.com"
    url = "https://yourwebsite.com"
    bio = "Your bio"
    photo = "/your-photo.jpg"
  
  [params.indieweb]
    webmention_endpoint = "https://webmention.io/yourdomain/webmention"
    webmention_api = "https://webmention.io/api/mentions.jf2"
    token_endpoint = "https://tokens.indieauth.com/token"
    authorization_endpoint = "https://indieauth.com/auth"
    micropub_endpoint = "https://yourdomain.com/micropub"
    microsub_endpoint = "https://aperture.p3k.io/microsub/123"
```

### Run Your Site
```bash
hugo server -D
```

## Documentation

- [Complete Specification Sheet](docs/spec-sheet.md) - Detailed design requirements
- [Demo Site](https://indiepaper.netlify.app) - See the theme in action
- [Configuration Guide](#configuration) - Full customization options

## Configuration

### Basic Setup

```toml
[params]
  description = "Your site description"
  author = "Your Name"
  email = "your.email@example.com"
  motto = "Your site motto"
  
  # IndieWeb endpoints
  [params.indieweb]
    token_endpoint = "https://tokens.indieauth.com/token"
    authorization_endpoint = "https://indieauth.com/auth"
    micropub_endpoint = "https://your-micropub-endpoint.com/micropub"
    webmention_endpoint = "https://webmention.io/yourusername/webmention"
    webmention_api = "https://webmention.io/api/mentions.jf2"
  
  # Social links (rel-me)
  [[params.social]]
    name = "Mastodon"
    url = "https://mastodon.social/@username"
  [[params.social]]
    name = "GitHub"
    url = "https://github.com/username"
```

### Content Types

#### Blog Posts
Create posts in `content/post/` with front matter:

```yaml
---
title: "Your Post Title"
date: 2024-01-01T12:00:00Z
draft: false
summary: "Brief summary of the post"
tags: ["tag1", "tag2"]
categories: ["category1"]
image: "/images/post-image.webp"
syndication:
  - https://bsky.app/profile/username/post/123456789
---
```

#### Notes
Create short notes in `content/notes/` for microblog-style content.

#### Images
Use the provided shortcode for smolweb-compliant images:

```markdown
{{< img src="/images/photo.webp" 
        alt="A beautiful sunset over mountains" 
        caption="Sunset in the Rockies"
        link="/images/photo-full.webp" >}}
```

## IndieWeb Features

### Microformats2
- **h-card**: Author/site identity in header
- **h-entry**: Blog posts and articles
- **h-feed**: Post listings and archives
- **h-cite**: Webmentions and responses

### Webmentions
Configure webmention.io to receive responses from across the web. The theme automatically displays webmentions on individual posts.

### POSSE Support
Add `syndication` links to your front matter to publish on multiple platforms while owning your content.

## Design System

### Typography
- **Headers**: Geometric humanist sans-serif (Avenir, Montserrat, Corbel)
- **Body**: Old-style serif (Iowan Old Style, Palatino Linotype)
- **Code**: Monospace (ui-monospace, Cascadia Code, Source Code Pro)

### Colors
Pure monochrome palette:
- Black: `#000000`
- Dark Grey: `#333333`
- Medium Grey: `#666666`
- Light Grey: `#999999`
- Off-White: `#f5f5f5`
- White: `#ffffff`

### Layout
- Single column centered layout
- Maximum width: 65ch (optimal reading measure)
- Generous line height for readability
- No responsive CSS needed (natural mobile adaptation)

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 structure
- Proper heading hierarchy
- Skip links for keyboard navigation
- Focus indicators on interactive elements
- Screen reader friendly
- 4.5:1 contrast ratios for text

## Development

### File Structure
```
themes/indiepaper/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template
│   │   ├── single.html      # Single post
│   │   └── list.html        # List pages
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── nav.html
│   │   └── webmentions.html
│   ├── index.html           # Homepage
│   ├── index.json           # JSON feed
│   └── shortcodes/
│       └── img.html         # Image shortcode
├── static/
│   ├── style.css            # Single CSS file
│   ├── robots.txt
│   └── favicon.ico
└── exampleSite/             # Demo content
```

### Testing
The theme includes npm-based testing:

```bash
cd themes/indiepaper/exampleSite
npm install
npm test
```

Tests include:
- HTML validation
- CSS linting
- IndieWeb microformats validation
- Feed validation
- Accessibility testing

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please read the [specification](docs/spec-sheet.md) for design principles and requirements.

## Resources

- [Specification Sheet](docs/spec-sheet.md) - Complete design requirements
- [IndieWeb](https://indieweb.org/) - Decentralized web protocols
- [Smolweb](https://smolweb.org/) - Minimal web principles
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/) - Accessibility guidelines

---

**Indiepaper** - Write. Publish. Own your content.
