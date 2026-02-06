# Indiepaper Hugo Theme

A brutalist, smolweb-compliant, accessibility-first, indieweb-native Hugo theme inspired by Medium's design philosophy.

## Features

- **Smolweb Compliant**: Minimal, semantic HTML with efficient CSS
- **Accessibility First**: WCAG 2.1 AA compliant from the ground up
- **IndieWeb Native**: Full support for decentralized web protocols
- **Typography Focused**: Strong, beautiful type hierarchy
- **Performance Optimized**: Fast loading, minimal compute
- **Monochrome Design**: Pure black and white aesthetic

## Installation

1. Clone this repository into your Hugo site's themes directory:
   ```bash
   git clone https://github.com/brennanbrown/indiepaper.git themes/indiepaper
   ```

2. Update your site's `hugo.toml`:
   ```toml
   theme = "indiepaper"
   ```

## Configuration

Add these parameters to your `hugo.toml`:

```toml
[params]
  # Site metadata
  description = "Your site description"
  author = "Your Name"
  email = "your.email@example.com"
  
  # IndieWeb endpoints
  [params.indieweb]
    token_endpoint = "https://tokens.indieauth.com/token"
    authorization_endpoint = "https://indieauth.com/auth"
    micropub_endpoint = "https://your-micropub-endpoint.com/micropub"
    microsub_endpoint = "https://aperture.p3k.io/microsub/123"
    webmention_endpoint = "https://webmention.io/example/webmention"
    
  # Social links
  [[params.social]]
    name = "Mastodon"
    url = "https://mastodon.social/@username"
  [[params.social]]
    name = "GitHub"
    url = "https://github.com/username"
```

## Content Types

### Blog Posts

Create posts in `content/post/` with front matter:

```yaml
---
title: "Your Post Title"
date: 2024-01-01T12:00:00Z
draft: false
summary: "Brief summary of the post"
tags: ["tag1", "tag2"]
categories: ["category1"]
---
```

### Notes

Create short notes in `content/notes/` for microblog-style content.

## IndieWeb Features

- **h-card** for author information
- **h-entry** for posts and notes
- **Webmention** support
- **Micropub** endpoint configuration
- **Rel-me** links for identity verification

## Accessibility

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- 4.5:1 contrast ratios (AA compliance)
- Skip links for navigation

## Customization

The theme uses a single CSS file (`static/style.css`) that can be overridden in your site's `static/` directory.

## License

MIT License - see [LICENSE](LICENSE) for details.
