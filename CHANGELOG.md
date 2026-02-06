# Changelog

All notable changes to the Indiepaper Hugo theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-02-05

### Added
- Complete Hugo theme implementation with brutalist, smolweb-compliant design
- Full IndieWeb protocol support (microformats2, webmentions, micropub, microsub)
- WCAG 2.1 AA accessibility compliance with semantic HTML5
- Single CSS file with dark mode support and system fonts
- All page templates: home, single post, lists, archive, notes, taxonomies
- RSS and JSON feed generation
- Hugo module support
- Comprehensive documentation and specification sheet
- Demo site with example content
- Image shortcode with lazy loading and accessibility features
- Webmention integration using webmention.io API
- Author h-card microformat with rel-me verification
- Skip links and keyboard navigation support
- Focus indicators and screen reader optimization
- Responsive design through natural mobile adaptation
- Performance optimization (minimal JavaScript, efficient CSS)

### Fixed
- Dark mode CSS variables properly defined
- Config structure uses nested [params.author] object
- IndieWeb rel endpoints use standard values (micropub, microsub, webmention)
- Notes templates handle date formatting correctly
- Archive page uses proper layout type
- Robots.txt processed by Hugo templates
- Sitemap template compatible with Hugo v0.148+
- Author links use configurable URL
- Footer includes license and support information
- CSS respects spec measurements (65ch width, 1.75 line-height)

### Security
- Content Security Policy with proper directives
- No external dependencies or CDNs
- Safe template processing

### Documentation
- Complete specification sheet with design requirements
- Installation and configuration guide
- Feature documentation with examples
- Accessibility and IndieWeb protocol details
