---
title: My often used Git commands
slug: tech/git/my-often-used-git-commands
date: 2021-03-04
excerpt: ⏳
tag: git
lastEdited: 2021-04-03
isDraft: false
---

<!--
date must be: 2000-01-01
NOT: 2000-1-1 -->

<!-- https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/#writing-our-first-markdown-blog-post -->
<!-- https://github.com/gatsbyjs/gatsby/issues/3460 -->
<!-- https://mdxjs.com/getting-started#mdx -->

## Table of contents

1. [Add, Commit and Push](#1-add-commit-and-push)
2. [Amending the latest commit message](#2-amending-the-latest-commit-message)
3. [Amending older commit messages](#3-amending-older-commit-messages)
4. [Renaming a Git branch](#4-renaming-a-git-branch)
5. [Stashing and Cleaning](#5-stashing-and-cleaning)
6. [Get upstream update into your fork repo](#6-get-upstream-update-into-your-fork-repo)

## 1. Add, Commit and Push

The most basic commands that update a repository everytime you push into it.

```shell
# Step 1
git add .
# Step 2
git commit # which I prefer because I could add description easily
## OR
git commit -m "refactor: rename a variable"
# Step 3
git push
```

- To learn more about [git-add](https://git-scm.com/docs/git-add)
- To learn more about [git-commit](https://git-scm.com/docs/git-commit)
- To learn more about [git-push](https://git-scm.com/docs/git-push)

## 2. Amending the latest commit message

To amend a message of the latest pushed commit. Ensure you are in the correct repository and branch, which the latest commit belongs to.

```shell
# Step 1: Amend the latest pushed commit message
git commit --amend -m "Your new desired commit message"
# Step 2: Force push and update the latest commit message
git push --force branch-name
```

## 3. Amending older commit messages

`git rebase -i HEAD~5` will help to achieve that. It's not necessarily to be `5`, and it could be the 3rd or higher latest commits.

```shell
git rebase -i HEAD~10 # 10th or higher latest commits
git rebase -i HEAD~2 # 1st and 2nd latest commits
```

## 4. Renaming a Git branch

Ensure you are on the old branch you want to rename.

```shell
git checkout old_name
```

Provide a new name for the old branch.

```shell
git branch -m new_name
```

Push the newly renamed local branch and reset the upstream branch.

```shell
git push origin -u new_name
```

Lastly, delete the old remote branch.

```shell
git push origin --delete old_name
```

## 5. Stashing and Cleaning

```shell
# Before 'git stash', we have to add all changes in the working directory
git add .
# Then, stash the changes
git stash

# To check your stash list
git stash list

# The numbering depends on the index of list.
git stash apply 0

# Drop a stash, and the numbering also depends on the index of list.
git drop 0

# Clear stash list
git stash clear
```

- To learn more about [git-stash](https://git-scm.com/docs/git-stash)
- To learn more about [Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)


## 6. Get upstream update into your fork repo

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

## References

- [Merging an upstream repository into your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork)
