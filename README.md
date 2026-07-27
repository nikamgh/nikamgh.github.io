# nikamansourighiasi.github.io

Personal academic site. Jekyll, which GitHub Pages builds automatically — no build step, no Actions workflow, no local toolchain required to publish.

## Publish

1. Create a repository named `nikamansourighiasi.github.io` (replace with your GitHub username).
2. Push these files to the `main` branch.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

The site appears at `https://<username>.github.io` within a minute or two.

If you publish from a project repo instead (e.g. `github.com/<user>/website`), set `baseurl: "/website"` in `_config.yml`. Every internal link already runs through `relative_url`, so that one line is the only change needed.

## Add a paper

Open `_data/publications.yml`, add an entry under the right year:

```yaml
- year: 2026
  items:
    - title: "TAGMa: ..."
      authors: "Nika Mansouri Ghiasi, ..."
      venue: "MICRO, 2026"
      url: https://arxiv.org/abs/...   # optional, links the title
      selected: true                    # optional, also shows on the homepage
```

Your name is bolded automatically, in both the full form and the `N. Mansouri Ghiasi` abbreviation.

## Add news

`_data/news.yml`, newest first. HTML links are allowed in `text`. The homepage shows the eight most recent and folds the rest into an "Earlier news" toggle.

## Everything else

| File | Contents |
|---|---|
| `_config.yml` | Name, role line, email, Scholar link, nav order |
| `index.html` | Bio paragraphs |
| `publications.html` | Page structure only; content comes from `_data/` |
| `honors.html`, `education.html`, `teaching.html` | Plain lists, edit directly |
| `_layouts/default.html` | Header, sidebar, nav |
| `assets/css/style.css` | All styling; palette is in the `:root` block at the top |

## Local preview (optional)

```
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.
