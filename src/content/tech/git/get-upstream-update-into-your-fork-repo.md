---
title: Get upstream update into your fork repo
slug: tech/git/get-upstream-update-into-your-fork-repo
date: 2021-02-24
excerpt: ⏳
tag: git
lastEdited: 2021-02-25
---

<!--
date must be: 2000-01-01
NOT: 2000-1-1 -->

<!-- https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/#writing-our-first-markdown-blog-post -->
<!-- https://github.com/gatsbyjs/gatsby/issues/3460 -->
<!-- https://mdxjs.com/getting-started#mdx -->

Once upon a time, I was trying to help a few of my team members to fetch the latest update from the main branch of the remote repository. Then, I figured out it would be best to document it nice and precise for future reference.

```shell
git pull https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git BRANCH_NAME
```

## Let's get started

On your terminal, check your local branches `git branch -l` or all available branches `git branch -a`. 

Now, we have to check out the branch you want to merge to, which is usually your working branch.

```shell
git checkout DESIRED_BRANCH_NAME
```

Now we merge to your current working branch from the upstream repository.

> Note: This approach will not disturb your current commit history.

It's important to specify the command explicitly by doing:

```shell
git pull https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git BRANCH_NAME
```

Now your current working branch is up to date with the original repository, aka the upstream repository.

---

## References

- [Merging an upstream repository into your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork)
