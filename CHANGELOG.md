# Changelog

All notable changes to the Indiepaper Hugo theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-02-05

### Added
- Theme usage instructions with 3 installation methods
- Direct download link for theme zip file (415KB)
- Lighthouse performance screenshot with PageSpeed link
- Theme attribution in footer linking to Berry House
- Download button styling for better UX

### Changed
- Improved visual hierarchy with larger site title (2.5rem)
- Enhanced vertical rhythm between posts with subtle dividers
- Decluttered archive page by removing summaries
- Tags now display inline with metadata using hashtags
- Author link updated to brennan.day

### Fixed
- Syntax highlighting contrast issues in dark mode
- Code block table styling conflicts resolved
- Tag background colors for proper dark mode visibility
- Git history cleanup removing large files
- Archive page spacing optimization

### Improved
- Better post list scannability without summaries
- Cleaner meta line with tags, date, and word count
- Proper CSS variable usage for consistent theming
- Streamlined theme distribution without exampleSite
- Enhanced accessibility and WCAG compliance

## [1.1.0] - 2026-02-05

### Added
- Complete favicon set with proper web manifest configuration
- Rich demo content with 5 migrated blog posts covering IndieWeb topics
- Netlify deployment configuration with optimized headers and caching

### Changed
- Migrated from Twitter to Bluesky throughout theme and documentation
- Updated all URLs from example.com to indiepaper.netlify.app
- Redesigned footer for more compact, professional layout
- Consolidated demo site to use standard Hugo exampleSite structure
- Removed emojis from README for professional appearance
- Updated social links and syndication examples to use Bluesky

### Fixed
- Code block contrast issues in dark mode (proper text color inheritance)
- Duplicate horizontal lines in webmentions section
- Removed HR elements from content that caused visual duplication
- Cleaned up duplicate CSS styles for better maintainability
- Fixed YAML front matter in migrated posts for theme compatibility

### Improved
- Better content organization with proper categories (essays, guides, journal)
- Enhanced favicon support for all platforms and devices
- Optimized Netlify configuration with security headers and caching rules
- Streamlined project structure by removing redundant indiepaper-demo directory

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
