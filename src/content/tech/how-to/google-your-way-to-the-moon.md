---
title: ..google your way to the moon
slug: tech/how-to/google-your-way-to-the-moon
date: 2021-11-12
excerpt: 🔍
tag: how-to
lastEdited:
---

I've seeing how technical people emphasized **Googling** is an extremely important skill that every Software Engineer should properly acquire.

This is not an exhaustive list of **Google Search** techniques, but an opinionated commonly used techniques by myself.

- `filetype:` shows results of a certain filetype (pdf, docx, xlsx, etc.)
- `intitle` find pages that contain a specific word in the title.

## `related:`

Find related sites belonging to **hubspot**? You would get results such as:

- `knowledge.hubspot.com`, `developers.hubspot.com`, etc.

```shell
related:hubspot.com
```

## `site:`

How to center a div? 🙈 To find all results from stackoverflow.com:

```shell
site:stackoverflow.com how to center a div
```

### `site:[website] “keyword”`

To search content based on specific keyword on a specific site 😲

```shell
site:freecodecamp.com "frontend"
```

BUT HOW if medium.com doesn't allow us to search for particular keyword based on **specific tag** or look for **older articles**? I gotchu 😳

```shell
site:https://medium.com/tag/software-engineering essentials
```

## `"[search term]"`

It's to find exact matches, and they are not based on **keyword** this time.

```shell
"typescript essentials"
```

## References

- [Google Search Operators Cheat Sheet](https://static.semrush.com/blog/uploads/files/39/12/39121580a18160d3587274faed6323e2.pdf)
- https://kinsta.com/blog/google-search-operators/
