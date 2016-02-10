# Tasty Brunch Demo App

[![GitHub release](https://img.shields.io/github/release/makenew/tasty-brunch.svg)](https://github.com/makenew/tasty-brunch/releases)
[![GitHub license](https://img.shields.io/github/license/makenew/tasty-brunch.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/makenew/tasty-brunch.svg)](https://david-dm.org/makenew/tasty-brunch)
[![David](https://img.shields.io/david/dev/makenew/tasty-brunch.svg)](https://david-dm.org/makenew/tasty-brunch#info=devDependencies)
[![Travis](https://img.shields.io/travis/makenew/tasty-brunch/demo.svg)](https://travis-ci.org/makenew/tasty-brunch)

> Built from [makenew/tasty-brunch](https://github.com/makenew/tasty-brunch).

## Description

[Simple demo app] for [Tasty Brunch].

[Simple demo app]: https://makenew.github.io/tasty-brunch/
[Tasty Brunch]: https://github.com/makenew/tasty-brunch

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

#### Brunch

[Brunch] is responsible for the development cycle
and the production build.

Start a local Brunch development server with

```
$ npm start
```

Run tests and generate and the production build to `public` with

```
$ npm run dist
```

If installed globally, `brunch` may be invoked directly.
View available commands with

```
$ brunch
```

#### Tests

Run Mocha tests with

```
$ npm test
```

In a separate window, use gulp to watch for changes and run tests with

```
$ npm test:watch
```

#### gulp

Linting and deployment is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint JavaScript and Sass files with

```
$ npm run lint:watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[Brunch]: http://brunch.io/
[gulp]: http://gulpjs.com/

#### HTMLMinifier

Minify all `.html` files in the `public` directory with

```
$ npm run minify
```

### Deploy to GitHub Pages

Deploy the `public` directory to GitHub Pages with

```
$ npm run deploy
```

This will minify the HTML before deployment.
Deploy the `public` directory as-is with

```
$ npm run gh-pages
```

If `SOURCE_BRANCH` is set as a Travis CI environment variable,
then commits pushed to that branch will be deployed automatically.
This requires `.travis/deploy.key.enc` to be encrypted on Travis,
the corresponding decryption command in `.travis/deploy.sh`, and
the corresponding public key added as a deploy key to the GitHub repository.

### Meta Data

Meta data is defined in `app/index.static.hbs`.

- Nil values are indicated by a `~`.
  Nil fields never generate a meta tag.
  Fields which are Nil by default are generally optional.
- The `image`, `audio`, and `video` fields must be given
  as a fully qualified url.
  Be careful that the asset actually exists, i.e., use a unique
  image file and not one passed through `DIGEST` elsewhere.
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
