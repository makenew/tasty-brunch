# Tasty Brunch Demo App

[![GitHub release](https://img.shields.io/github/release/makenew/tasty-brunch.svg)](https://github.com/makenew/tasty-brunch/releases)
[![GitHub license](https://img.shields.io/github/license/makenew/tasty-brunch.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/makenew/tasty-brunch.svg)](https://david-dm.org/makenew/tasty-brunch)
[![David](https://img.shields.io/david/dev/makenew/tasty-brunch.svg)](https://david-dm.org/makenew/tasty-brunch#info=devDependencies)
[![Travis](https://img.shields.io/travis/makenew/tasty-brunch/demo.svg)](https://travis-ci.org/makenew/tasty-brunch)

> Built from [makenew/tasty-brunch](https://github.com/makenew/tasty-brunch).

[![wercker status](https://app.wercker.com/status/da977a4ff69fde0e557244a0c12f8933/m "wercker status")](https://app.wercker.com/project/bykey/da977a4ff69fde0e557244a0c12f8933)

## Description

**[Demo app] for [Tasty Brunch].**

- Simple counter app built with [Redux] and [React].
- Testing with [Mocha] and [Chai].
- Type checking with [Flow].
- Built on [Skeleton-Sass] with [Raleway] font loaded
  by [Web Font Loader].

[Chai]: http://chaijs.com/
[Demo app]: https://makenew.github.io/tasty-brunch/
[Flow]: https://flowtype.org/
[Mocha]: https://mochajs.org/
[React]: https://facebook.github.io/react/
[Raleway]: https://github.com/impallari/Raleway/
[Redux]: http://redux.js.org/
[Skeleton-Sass]: https://github.com/WhatsNewSaes/Skeleton-Sass
[Tasty Brunch]: https://github.com/makenew/tasty-brunch
[Web Font Loader]: https://github.com/typekit/webfontloader

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

To use the newest allowed Node packages,
or after updating any package versions in `package.json`,
update and stage `npm-shrinkwrap.json` with

```
$ npm update
$ npm shrinkwrap --dev
$ git add npm-shrinkwrap.json
```

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

#### Tests

Run Mocha tests with

```
$ npm test
```

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

In a separate window, use gulp to watch for changes,
run tests, and lint HTML, JavaScript, and Sass files with

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

This app is licensed under the MIT license.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
