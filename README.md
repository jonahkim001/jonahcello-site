# jonahcello-site

Official site of cellist Jonah Kim: https://www.jonahcello.com

Plain static HTML and CSS. There is no build step or framework; every page is a standalone `.html` file.

## How it deploys

The repo is connected to Vercel. **Every push to `main` deploys to the live site within about a minute.** Pushes to any other branch get a private preview URL instead, which is the safer way to try out larger changes.

`www.jonahcello.com` is the main address; `jonahcello.com` forwards to it.

## Layout

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About (bio and reviews) |
| `discography.html` | Records |
| `listen.html` | Stream (videos and audio) |
| `gallery.html` | Photos |
| `store.html` | Store |
| `calendar.html` | Calendar |
| `contact.html` | Contact |
| `styles.css` | All styling, shared by every page |
| `images/` | Photos, album covers, and the logo (`jonah-signature.png`) |
| `vercel.json` | Redirects from old Squarespace addresses (e.g. `/about`, `/concerts`) |
| `robots.txt`, `sitemap.xml` | Help search engines find the pages |

The header, nav, and footer are copied into every page. **When you change one of them, change all eight pages.**

## Common edits

**Adding or changing a concert** (`calendar.html`): copy an existing `<li class="event">` block. Set `data-end` to the event's last day (`YYYY-MM-DD`); the page fades out events after that date automatically. If the event has a confirmed date, time, and venue, also add it to the `application/ld+json` block at the top of the file so search engines can list it.

**Adding a photo** (`gallery.html`): resize it to about 1600px on the long side first (a few hundred KB, not several MB), put it in `images/`, and add an `<img>` line. The gallery crops every photo to the same box; if a face gets cut off, add `style="object-position:50% 20%"` (a smaller second number shows more of the top).

**Page titles and share previews**: each page's `<head>` has a description plus `og:` tags that control how links look when shared by text or on social media.

## Previewing locally

From this folder, run any static file server, for example:

```bash
python3 -m http.server 4610
```

Then open http://localhost:4610. (Redirects in `vercel.json` only work on Vercel.)
