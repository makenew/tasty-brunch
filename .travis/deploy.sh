#!/bin/bash

set -e
set -u

if [ ! "${TRAVIS:-}" = 'true' ]; then
  echo 'This is not running on Travis CI. Exiting!'
  exit 1
fi

if [ "${TRAVIS_PULL_REQUEST:-}" = 'true' ]; then
  echo 'Skipping deploy step for pull request.'
  exit
fi

if [ -z "${SOURCE_BRANCH:-}" ]; then
  echo 'Skipping deploy: SOURCE_BRANCH not set.'
  exit
fi

if [ ! "${TRAVIS_BRANCH:-}" = ${SOURCE_BRANCH} ]; then
  echo 'Skipping deploy since this is not the SOURCE_BRANCH.'
  exit
fi

echo 'Starting deploy.'
echo

set -v

openssl aes-256-cbc \
  # TODO: Remove this line and replace the two below with your unique values.
  -K $encrypted_000000000000_key \
  -iv $encrypted_000000000000_iv \
  -in .travis/deploy.key.enc \
  -out .travis/deploy.key -d

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy.key
ssh-add .travis/deploy.key

npm run deploy

exit
