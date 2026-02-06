---
title: "A Beginner's Guide to the IndieWeb for Writers Who Don't Code (But Maybe Want to a Little)"
date: 2026-01-27T00:00:00-07:00
draft: false
summary: "You don't need to be a developer to own your corner of the internet. A guide for writers, poets, and creators who want to escape algorithmic feeds and reclaim their digital presence. No computer science degree required."
tags: ["personal-essay", "indieweb", "writing", "community", "blogging", "digital-culture"]
categories: ["guides"]
description: "You don't need to be a developer to own your corner of the internet. A guide for writers, poets, and creators who want to escape algorithmic feeds and reclaim their digital presence. No computer science degree required."
image: "/assets/images/blog/writers-guide.jpg"
---

I am somebody that dives into both the literary (which is typically navel-gazing thinkpieces that are philosophical in air quotes) and the technical (where I usually just wrestle with a weird npm build bug for several hours).

One of the biggest topics I've been focused on the past while is the IndieWeb, also known as the independent Internet. In the simplest terms, this means owning your content and platform instead of using corporate social media that engages in dark practices like surveillance capitalism. Nearly every single person that uses the Internet does NOT use the IndieWeb. We're all on Facebook, Instagram, TikTok, LinkedIn, or God forbid, X.

Why do I care so much about this? Beyond the unethical practices of these platforms who are solely aligned to gaining maximum profits to their shareholders, the truth is I am trying to find viable alternatives and harm reductions because *everyone* is addicted to the Internet, or at the very least are extremely dependent on their Internet-connected devices.

There are some people that advocate for no-tech or "digital detoxes", but these are equivalent to crash diets. I believe transitioning to the IndieWeb is the most sustainable, best solution for people.

But, frankly, the IndieWeb is still incredibly nerdy and technical. I've gotten comments on my previous articles of people saying they didn't know where to start.

The last thing I want to do is alienate my audience, which is what happens sometimes when I am writing whatever the hell I want to.

But, of course, this is also by design. It is easy and free to sign up to corporate social media (although it is getting increasingly difficult, isn't it? Having to verify your identity or even hand over your ID to these private companies? I certainly hope you haven't done that!)

So, all of this is to say I am writing this article to hopefully get people that have ZERO technical knowledge onto the IndieWeb.

Now, this guide isn't perfect. Being truly independent requires a level of technical knowledge. Even with my own [personal site](https://brennan.day) which I built from scratch, I'm still hosting on Netlify and my code is on [GitLab](https://gitlab.com/brennankbrown/brennan.day).

But there are absolutely options to begin the transition. You'll be using someone else's platforms, but your work will be far easier to import/export. My recommendations are platforms that are not seeking to maximize profits by [any means necessary](https://www.noemamag.com/the-last-days-of-social-media/), or run by [billionaires that are friendly](https://www.advocate.com/opinion/tim-cook-melania-trump) with the Trump administration.

The core principle is **own your domain, own your content, own your identity.**

## A Domain of One's Own

Before anything else, the best thing you can do for yourself it to buy a domain. [Porkbun](https://porkbun.com/) is my recommendation, with some first-year costs being as low as a couple dollars. Choose something personal or fun, like your name, a phrase you love, whatever feels right. This is yours! The IndieWeb wiki has [a good article](https://indieweb.org/A_Domain_of_One%27s_Own) on this.

Now, what do you *do* with this domain? You'll connect it with one of the platforms I'll be showing below. Now, this *is* a little technical, but it essentially boils down to changing some numbers and words on the settings page. This is different for each domain manager and platform, but I promise it isn't as scary as it seems with all the technical words like DNS records and CNAME and IP addresses. I will help you about this one-on-one free-of-charge if you need!

### E-mail Bonus

An aside: Another thing I love about Porkbun is that they have effortless email forwarding. What does this mean? That you can give people the email name@yourwebsite.xyz and have any emails send to that address forwarded to your actual already-existing email. For instance, I have mail@brennanbrown.ca, which looks a lot more professional than brennankbrown@gmail.com

## The Actual Guide

*"But I'm Not Technical!"* I hear you say.

I have an English degree, not a computer science degree. I learned to code because I wanted to build things, not because I was naturally gifted at it. You don't need to be. You just need to be curious and willing to try.

The IndieWeb has options for every skill level:

### Level 0: No Code Required

Start with platforms that handle the technical stuff for you:

**[omg.lol](https://home.omg.lol/referred-by/brennan)** ($20/year) gives you a domain, a simple profile page, a status log, email forwarding, and access to a genuinely kind community. You can write posts using their weblog feature without touching a single line of code. The founder, Adam Newbold, explicitly rejects surveillance capitalism and AI scraping. It's $20 a year.

**[Pika.page](https://pika.page)** (free for 50 posts, then $6/month) is a beautiful blogging platform with a guestbook, image uploads, and simple theming. The writing experience is clean and distraction-free. When you hit 50 posts, you'll know you're serious enough to either pay for it or graduate to something more complex.

**[Bear Blog](https://bearblog.dev/)** (free) is ultra-minimalist—just text, no frills. If you don't need images or fancy formatting, this might be perfect.

**[DreamWidth](https://www.dreamwidth.org)** is a more old-school feeling blogging site that is a spiritual successor to the more well-known LiveJournal. It's user-funded but has a flexible free tier, and it also has the option to enable comments. There's a lively community there!

These platforms give you a domain, RSS feeds, and the ability to own your content. You can export everything and move elsewhere if you want. You're not locked in.

You'll learn [Markdown](https://daringfireball.net/projects/markdown/), which is just plain text with simple formatting, and that renders into HTML. You write like this:

```markdown
# This is a heading

This is a paragraph with **bold text** and *italic text*.

- This is a list
- With multiple items
```

### Level 1: A Little HTML Goes a Long Way

If you're willing to learn some basics, [NeoCities](https://neocities.org/) (free) lets you build your own site from scratch. Their tutorials are beginner-friendly, and the community is supportive. 

Then, you'll learn HTML and CSS, which are genuinely useful skills even if you never become a "developer."

Think of HTML as the skeleton of a webpage. Text with some angle brackets telling the browser what's a heading, what's a paragraph, what's a link. CSS is the styling—colors, fonts, layout. That's it. You're not writing complex algorithms. You're just saying "this is a heading" and "make it blue."

```html
<h1>This is a heading</h1>
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
```

Resources for learning:
- [HTML for People](https://htmlforpeople.com/) - A gentle, human-friendly introduction
- [Sadgrl.online Guides](https://sadgrl.online/guides/) - Tutorials specifically for NeoCities
- [The Dragonfly Cave's HTML Guide](https://www.dragonflycave.com/html-guide/) - Thorough and clear

### Level 2: Static Site Generators

This is where I am. I use [Eleventy](https://www.11ty.dev/), a static site generator that takes Markdown files and turns them into a full website. 

Eleventy handles the rest. Generating pages, creating navigation, building RSS feeds, etc. You can start with a template (like my [11ty IndieWeb Blog Starter](https://github.com/brennanbrown/11ty-Indie-Web-Blog-Starter)) and customize it as you learn.

Static sites are fast, secure, and cheap to host. No database to maintain, no server to manage. Just files.

## What You Actually Get?

My site at [brennan.day](https://brennan.day) is *mine*. The design reflects my personality—rainbow gradients, a Gruvbox-inspired color scheme, 88x31 badges from the '90s web. I can change anything I want, any time I want. No brand guidelines, no platform restrictions.

## Community

So, how do you find new people to connect with? 

First, get on [Mastodon](https://mastodon.social/)! It's like an old-school, decentralized Twitter. Free and open source. You can [sign up](https://mastodon.social/signup) and join the [IndieWeb community](https://indieweb.social/). Then, you can use a service like [Echofeed](https://echofeed.app/) to automatically publish your blog posts to your Mastodon account when you publish them on your own site.

I'm also part of several different [webrings](https://indieweb.org/webring), which are collections of websites linked together. When someone visits my site, they can click "next" or "random" to discover other sites in the ring. 

I have a [blogroll](https://brennan.day/blogroll/), a list of other blogs I read. When I find something interesting, I link to it. That's how we used to build community online, and it still works.

Much more advanced: I built a comment system using [IndieAuth](https://indieauth.com/), which means people can comment using their own websites as identity. No creating yet another account. No giving an email to yet another company. Just their domain name.

Much more advanced: Using [Micropub](https://micropub.spec.indieweb.org/) and [Quill](https://quill.p3k.io/), I can [write posts from my phone and publish them to my site](https://brennan.day/posting-to-your-static-site-with-quill-and-micropub/). I don't need to log into a Git repository or edit files directly. The IndieWeb has thought about usability.

## Multiple Homes

One of the great things about the IndieWeb is that it is super easy to mirror/back-up your stuff. My site is mirrored to [NeoCities](https://brennanday.neocities.org) automatically (I wrote about that [here](https://brennan.day/deploying-an-eleventy-site-to-neocities-with-gitlab-ci-cd/)).

I also have a presence on [Tilde.town](https://tilde.town/~brennan), an SSH-based community. And I post to [status.lol](https://status.lol), which syncs to my site's [twtxt](https://brennan.day/twtxt-simple-decentralized-microblogging-with-status-lol/). 

If any platform disappears tomorrow, I still have my site. My content doesn't vanish with someone else's business model. The site is the hub and everything else is a spoke.

## Reaching Readers

*"If I'm not on a platform, how will anyone find my work?"*

The truth is, most people on platforms aren't finding your work either. The algorithm shows your posts to a tiny fraction of your followers. You're shouting into a void that occasionally echoes back.

On the IndieWeb, you build an audience differently:

**RSS feeds** let people subscribe to your site. When you publish something new, it shows up in their feed reader.

**Directories and webrings** help people discover your site. [Ye Olde Blogroll](https://blogroll.org/), [Ooh Directory](https://ooh.directory/), and [Personal Sites](https://personalsit.es/) are all human-curated collections of independent websites.

**Search engines** still exist. [Kagi](https://kagi.com/smallweb/) has a Small Web search specifically for independent sites. [Marginalia](https://search.marginalia.nu/) favors text-heavy websites over SEO-optimized content farms.

[**Webmentions**](https://webmention.io/) are more advanced, but they notify you when someone links to your post from their own site. It's a thoughtful version of retweets, people are writing actual responses, not just hitting a button.

The audience you build is smaller but more engaged. These are people who chose to follow you, not people who doomscroll past your posts between ads.

## Challenges

There's a learning curve. Even simple platforms require learning new tools. You'll need to understand domains, hosting, and basic web concepts.

Building a site takes time. Customizing it takes more time. Writing posts, maintaining links, engaging with the community. All takes time.

You will have fewer readers than on Substack or Medium, at least initially. If your goal is maximum reach, corporate platforms *are* more efficient.

Things will break. Links will stop working. You'll need to troubleshoot. But there are guides and such a helpful community.

## It's Worth It

Every word you write on Medium or Substack or Threads is subject to their terms of service. They can delete it, hide it, or change how it's displayed. Entire platforms come and go. MySpace, Google+, Vine? taking millions of posts with them. Your domain and your files persist as long as you maintain them.

Your site is yours forever.

No ads unless you choose them. No feeds to make you anxious. Just your words and the people who want to read them.

The IndieWeb community is genuinely kind and looking to help newcomers. People share their code, answer questions, and celebrate each other's work.

## How to Start Today

If you're ready to try, here's what I recommend:

Buy a domain from [Porkbun](https://porkbun.com/) ($10/year). Choose something personal—your name, a phrase you love, whatever feels right. This is your digital land.

Start with [Pika.page](https://pika.page) or [omg.lol](https://home.omg.lol/referred-by/brennan). Both are beginner-friendly and give you a working site immediately. Write your first post. Don't overthink it.

Write about yourself with an `/about` page. What do you care about? What do you write? Why should someone read your work? This is your `/about` page, and it's more important than you think.

Then, if you're so inclined, you can create more [slash pages](https://slashpages.net/), detailing your interests, your projects, your collections, whatever you like!

Find other IndieWeb sites through [directories](https://ooh.directory/) and [webrings](https://indieweb.org/webring). Comment on posts you enjoy. Link to work you admire. Start building your corner of the web.

Then, try the [100 Days to Offload](https://100daystooffload.com/) challenge, write 100 posts in a year. Join the [IndieWeb community](https://indieweb.org/). Experiment with [RSS readers](https://netnewswire.com/). See what resonates.

## The Writing Matters Most

**The technology serves the writing, not the other way around.**

I can teach you about the technology all I want, but at the end of the day, you do just need to write. You don't need a perfect site. You don't need to understand every technical detail. You just need a place to post, and the willingness to share it.

I've imported and written over 80 posts on my IndieWeb site in the past two months, stuff I've written since the start of 2025. Technical tutorials, personal essays, and some just silly observations. None approved by algorithms or optimized for engagement.

I write what I want, when I want, how I want. That freedom is worth every hour I spent learning HTML.

## Harm Reduction

You don't have to choose. This isn't all-or-nothing. You can keep your social media and start an IndieWeb site. My entire ethos here is to start small but keep at it, do what works for you.

The IndieWeb philosophy is [POSSE](https://indieweb.org/POSSE).Publish (on your) Own Site, Syndicate Elsewhere. Your site is the canonical source, but you can share your work wherever your readers are.

## An Invitation

The independent web is already here, quietly thriving while Big Tech is collapsing in real-time under its own extractive weight.

Writers, artists, poets, and creators are building their own spaces, linking to each other, forming communities based on shared interests rather than algorithmic recommendations.

You don't need to be technical to join us. You just need to be willing to try something different.

Start small. Buy a domain. Write a post. Link to someone else's work. See how it feels to own your corner of the internet. The tools are here. The community is welcoming. 

The only thing missing is you.