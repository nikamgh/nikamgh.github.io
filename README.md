# nikamansourighiasi.github.io

Personal academic site. Jekyll, which GitHub Pages builds automatically — no build step, no Actions workflow, nothing to install to publish.

Layout follows the Hugo Blox (Wowchemy) Academic template. Five separate pages, mirroring the old Google Sites structure: Bio, Publications, Honors & Awards, Education & Experience, Teaching.

## Publish

1. Create a repository named `nikamansourighiasi.github.io` (replace with your GitHub username).
2. Push these files to the `main` branch.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

The site appears at `https://<username>.github.io` within a minute or two.

If you publish from a project repo instead (e.g. `github.com/<user>/website`), set `baseurl: "/website"` in `_config.yml`. Every internal link runs through `relative_url`, so that one line is the only change.

## Add a paper

`_data/publications.yml`, under the right year:

```yaml
- year: 2026
  items:
    - title: "TAGMa: ..."
      authors: "Nika Mansouri Ghiasi, ..."
      venue: "MICRO, 2026"
      url: https://arxiv.org/abs/...        # optional → links the title
      doi: https://doi.org/...              # optional → DOI button
      code: https://github.com/...          # optional → Code button
      slides: https://.../slides.pdf        # optional → Slides button
      selected: true                        # optional → also on the homepage
```

Your name is bolded automatically. The list is generated from `main-cv.tex`, so keep the two in sync when you add papers.

To host a PDF yourself rather than linking out, drop it in `assets/papers/` and set `url: /assets/papers/<name>.pdf`. See `assets/papers/README.md` — five entries are already pointed there and need their files downloaded once.

## Add a page

Copy `honors.html`, change the `title` and `permalink` in the front matter, then add a matching line to `nav:` in `_config.yml`. The navbar picks it up and highlights it automatically.

## Add news

`_data/news.yml`, newest first. HTML links are allowed in `text`. The homepage shows the eight most recent and folds the rest behind "Earlier news".

## Social links

`_config.yml` has empty `github:`, `linkedin:`, and `twitter:` fields. Paste a URL and the button appears in the hero; leave it blank and it stays hidden.

## Where everything lives

| File | Contents |
|---|---|
| `_config.yml` | Name, role, org, email, Scholar and social links, navbar order |
| `index.html` | Bio page: photo, about, news, selected papers, honors |
| `publications.html` | Full list; content comes from `_data/` |
| `honors.html` | Honors & awards |
| `education.html` | Education & experience |
| `teaching.html` | Teaching |
| `_data/publications.yml` | Every paper |
| `_data/news.yml` | News items |
| `_data/overview.yml` | Research summary and initiative papers |
| `_layouts/default.html` | Navbar and footer |
| `_includes/pub-item.html` | How one citation renders |
| `assets/css/style.css` | All styling; palette is the `:root` block at the top |
| `assets/js/site.js` | Mobile menu toggle |
| `assets/img/nika.jpg` | Headshot |
| `assets/papers/` | Self-hosted paper PDFs |

## Change the accent colour

Top of `assets/css/style.css`:

```css
--accent:      #1565c0;
--accent-dark: #0d47a1;
```

## Local preview (optional)

```
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.
