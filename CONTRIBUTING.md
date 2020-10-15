#easymoney

- [Commit Message Guidelines](#commit)
- [Contribute to the codebase](#contribute)
- [Installation](#install)
- [Working with documentation site](#sitedocs)
- [Running tests](#tests)

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the Project change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue or jira task](https://help.github.com/articles/closing-issues-via-commit-messages/) if any exist.

Samples: ([samples from easymoney repo](https://github.com/frolovdev/easymoney/commits/master))

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

The following is the list of supported scopes are pacakges names.

There are currently a few exceptions to the "use package name" rule:

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to


**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document](https://docs.google.com/document/d/1qrdfciipjsldn3el15ijygnpihorgu1_ooaqwjidu5y/edit#heading=h.uyo6cb12dt6w).


## <a name="contribute"></a> Contribute to codebase

1. Search [GitHub](https://github.com/frolovdev/easymoney/pulls) for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
1. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
  Discussing the design up front helps to ensure that we're ready to accept your work.
2. Fork the repo.
3. Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

4. Create your patch, **including appropriate test cases**.
5. Run the full easymoney test suite, as described in the [developer documentation][dev-doc],
  and ensure that all tests pass.
1. Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
    Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

1. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

1. In GitHub, send a pull request to `easymoney:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the easymoney test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="install"></a> Installation

* You need yarn as package manager

     ```shell
    yarn
    ```

* Build 


     ```shell
    yarn start
    ```

* Test

     ```shell
    yarn test
    ```

## <a name="sitedocs"></a> Working with documentation site

* Go to website folder

    ```shell
    cd website
    ```

* You need npm package manager to install packages

    ```shell
    npm install
    ```

* To run project on localhost

    ```shell
    npm run start
    ```

* Open browser and go to localhost:3000

## <a name="tests"></a> Runing tests

```
node --inspect-brk ./node_modules/.bin/jest -i ./integration/money/money.test.ts -t "should fix the issue #61 https://github.com/frolovdev/easymoney/issues/61" --config jest.config.js --bail
```