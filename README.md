# Tasty Brunch App Skeleton

[<img src="https://makenew.github.io/makenew.svg" alt="Make New" height="20">](https://makenew.github.io/)
[![GitHub release](https://img.shields.io/github/release/makenew/tasty-brunch.svg)](https://github.com/makenew/tasty-brunch/releases)
[![GitHub license](https://img.shields.io/github/license/makenew/tasty-brunch.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/makenew/tasty-brunch.svg)](https://david-dm.org/makenew/tasty-brunch)
[![David](https://img.shields.io/david/dev/makenew/tasty-brunch.svg)](https://david-dm.org/makenew/tasty-brunch#info=devDependencies)
[![Travis](https://img.shields.io/travis/makenew/tasty-brunch.svg)](https://travis-ci.org/makenew/tasty-brunch)

[![wercker status](https://app.wercker.com/status/da977a4ff69fde0e557244a0c12f8933/m "wercker status")](https://app.wercker.com/project/bykey/da977a4ff69fde0e557244a0c12f8933)

## Description

Bootstrap a new [Brunch] app in less than a minute.

Check out the **[live demo]** and its **[source code]**!

Start building your modern single page app
with the fastest build tool around.
No assumptions: just the essential boilerplate with
an instant-feedback development cycle and deployment pipeline.

[Brunch]: http://brunch.io/
[live demo]: https://makenew.github.io/tasty-brunch/
[source code]: https://github.com/makenew/tasty-brunch/tree/demo

### Features

- Develop and build with [Brunch]: the ultra-fast HTML5 build tool.
- Core HTML5 layout based on [HTML5 Boilerplate].
- Modular static templating with [html-brunch-static]
  [Handlebars], and [Yaml Front Matter].
- Extensive intelligent meta tag support.
- Write modern JavaScript with [Babel] and the [ES2015 preset].
- Write styles with [PostCSS], [postcss-import], and [PostCSS-cssnext].
- Production assets optimized with [UglifyJS] and [clean-css].
- Frontend and development dependency management with [npm].
- Automatic browser reloading with [auto-reload-brunch].
- Linting with the [JavaScript Standard Style], [stylelint], and [HTMLHint].
- Automatically lint on changes with [gulp].
- Standardized element styles with [sanitize.css].
- Favicons with [Favic-o-matic].
- The internet is for humans with [humans.txt].
- [Travis CI] and [wercker] ready.
- Deploy to [GitHub pages] locally or from [wrecker]
  (or [add Travis CI deployment][travis-deploy]).
- Optimized and tested deployment build with
  [gulp-rev-all], [HTMLMinifier] and [imagemin].
- [Keep a CHANGELOG].
- Consistent coding with [EditorConfig].
- Badges from [Shields.io].

[auto-reload-brunch]: https://github.com/brunch/auto-reload-brunch
[Babel]: https://babeljs.io/
[Brunch]: http://brunch.io/
[clean-css]: https://github.com/jakubpawlowicz/clean-css
[EditorConfig]: http://editorconfig.org/
[ES2015 preset]: https://babeljs.io/docs/plugins/preset-es2015/
[Favic-o-matic]: http://www.favicomatic.com/
[GitHub pages]: https://pages.github.com/
[gulp]: http://gulpjs.com/
[gulp-rev-all]: https://github.com/smysnk/gulp-rev-all
[Handlebars]: http://handlebarsjs.com/
[html-brunch-static]: https://github.com/bmatcuk/html-brunch-static
[HTML5 Boilerplate]: https://html5boilerplate.com/
[HTMLHint]: https://github.com/yaniswang/HTMLHint
[HTMLMinifier]: https://github.com/kangax/html-minifier
[humans.txt]: http://humanstxt.org/
[imagemin]: https://github.com/imagemin/imagemin
[JavaScript Standard Style]: http://standardjs.com/
[Keep a CHANGELOG]: http://keepachangelog.com/
[npm]: https://www.npmjs.com/
[PostCSS]: http://postcss.org/
[PostCSS-cssnext]: http://cssnext.io/
[postcss-import]: https://github.com/postcss/postcss-import
[sanitize.css]: https://jonathantneal.github.io/sanitize.css/
[Shields.io]: http://shields.io/
[stylelint]: http://stylelint.io/
[Travis CI]: https://travis-ci.org/
[travis-deploy]: https://gist.github.com/razor-x/a76da4b96928986776a966124a078e1d
[UglifyJS]: https://github.com/mishoo/UglifyJS2
[wercker]: http://wercker.com/
[Yaml Front Matter]: https://github.com/dworthen/js-yaml-front-matter

### Bootstrapping a New Project

1. Clone the master branch of this repository with

   ```
   $ git clone --single-branch https://github.com/makenew/tasty-brunch.git new-tasty-brunch
   $ cd new-tasty-brunch
   ```

   Optionally, reset to the latest [release][Releases] with

   ```
   $ git reset --hard tasty-brunch-v3.3.2
   ```

2. Run

   ```
   $ ./makenew.sh
   ```

   and follow the prompts.
   This will replace the boilerplate, delete itself,
   and stage changes for commit.
   This script assumes the project repository will be hosted on GitHub.
   For an alternative location, you must update the URLs manually.

3. Fill in the README Description section.

4. If [choosing a license][Choose a license] other than the one provided:
   update `LICENSE.txt`, the README License section,
   and `package.json` with your chosen license.

5. Add your own favicons from [Favic-o-matic]
   to `app/assets/favicon` and overwrite `app/assets/favicon.ico`.
   You can make a quick [Font Awesome] favicon at [FA2PNG].

6. Further customize the meta data in `app/index.static.hbs`
   and replace `app/assets/image.png` with a custom image.

7. [Lock your dependencies](#updating-requirements)
   with `npm-shrinkwrap.json`.
   Optionally, lock the Node.js version with `.nvmrc`
   `engines` in `package.json`, and in `wercker.yml`.

8. Configure [deployment](#deploy-to-github-pages)
   to GitHub pages from wercker and update the wercker badge.

9. If hosting this as part of a larger website,
   the following boilerplate files can be removed:
   `404.static.hbs`, `crossdomain.xml`, and `robots.txt`.

[Choose a license]: http://choosealicense.com/
[FA2PNG]: http://fa2png.io/
[Font Awesome]: https://fortawesome.github.io/Font-Awesome/
[Releases]: https://github.com/makenew/tasty-brunch/releases
[The Unlicense]: http://unlicense.org/UNLICENSE

### Updating

If you want to pull in future updates from this skeleton,
you can fetch and merge in changes from this repository.

If this repository is already set as `origin`,
rename it to `upstream` with

```
$ git remote rename origin upstream
```

and then configure your `origin` branch as normal.

Otherwise, add this as a new remote with

```
$ git remote add upstream https://github.com/makenew/tasty-brunch.git
```

You can then fetch and merge changes with

```
$ git fetch --no-tags upstream
$ git merge upstream/master
```

#### Changelog

Note that `CHANGELOG.md` is just a template for this skeleton.
The actual changes for this project are documented in the commit history
and summarized under [Releases].

## Quickstart

```
$ git clone https://github.com/makenew/tasty-brunch.git
$ cd tasty-brunch
$ npm install
$ npm start
```

## Building and Development

### Source Code

The [makenew-tasty-brunch source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/makenew/tasty-brunch.git
```

[makenew-tasty-brunch source]: https://github.com/makenew/tasty-brunch

### Requirements

You will need [Node.js] with [npm].

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/

#### Updating requirements

Requirements are version-locked to ensure consistent deploys.
See the [npm-shrinkwrap] documentation for dependency management.

[npm-shrinkwrap]: https://docs.npmjs.com/cli/shrinkwrap

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run-script`.
View them with

```
$ npm run
```

#### Production Build

Lint, test, generate, and optimize the production build to `public` with

```
$ npm run dist
```

#### Deploy to GitHub Pages

Build and deploy to GitHub Pages with

```
$ npm run deploy
```

The following environment variables can be set to customize the deploy:
`DEPLOY_REPO`, `DEPLOY_BRANCH`, `DEPLOY_NAME`, and `DEPLOY_EMAIL`.

##### Deploy from wrecker

Create a new wercker SSH key with the name `DEPLOY`,
add it to a new wercker deploy step,
and add it to the GitHub repository as a deploy key with write access.

#### Brunch

[Brunch] is responsible for the development cycle
and the production build.

Start a local Brunch development server with

```
$ npm start
```

If installed globally, `brunch` may be invoked directly.
View available commands with

```
$ brunch
```

#### gulp

Linting, deployment, and optimization is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint HTML, JavaScript, and CSS files with

```
$ npm run watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[Brunch]: http://brunch.io/
[gulp]: http://gulpjs.com/

### Meta Data

Meta data is defined in `app/index.static.hbs`.

- Nil values are indicated by a `~`.
  Nil fields never generate a meta tag.
  Fields which are Nil by default are generally optional.
- The `image`, `audio`, and `video` fields must result in a fully qualified url.
  This is handled for local files automatically, but you must also include
  the file in the array `dontRev` in `gulpfile.js`.
  For externally hosted files, you must modify
  `app/static/partials/meta.static.hbs`
- Instead of the `video` field, you may specify a `youtube` video id.
- The `twitter` fields are used for [Twitter Cards], but you must
  enable them for your domain with Twitter first.

[Twitter Cards]: https://dev.twitter.com/cards/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/makenew/tasty-brunch/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This software can be used freely, see [The Unlicense].
The copyright text appearing below and elsewhere in this repository
is for demonstration purposes only and does not apply to this software.

This app is licensed under the MIT license.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
