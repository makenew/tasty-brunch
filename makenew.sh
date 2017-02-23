#!/usr/bin/env sh

set -e
set -u

find_replace () {
  git grep --cached -Il '' | xargs sed -i.sedbak -e "$1"
  find . -name "*.sedbak" -exec rm {} \;
}

sed_insert () {
  sed -i.sedbak -e "$2\\"$'\n'"$3"$'\n' $1
  rm $1.sedbak
}

sed_delete () {
  sed -i.sedbak -e "$2" $1
  rm $1.sedbak
}

check_env () {
  test -d .git || (echo 'This is not a Git repository. Exiting.' && exit 1)
  for cmd in ${1}; do
    command -v ${cmd} >/dev/null 2>&1 || \
      (echo "Could not find '$cmd' which is required to continue." && exit 2)
  done
  echo
  echo 'Ready to bootstrap your new project!'
  echo
}

stage_env () {
  echo
  git rm -f makenew.sh
  echo
  echo 'Staging changes.'
  git add --all
  echo
  echo 'Done!'
  echo
}

makenew () {
  read -p '> App title: ' mk_title
  read -p '> App name (slug): ' mk_slug
  read -p '> Short app description: ' mk_description
  read -p '> App domain (e.g., makenew.github.io): ' mk_domain
  read -p '> App base url (leave empty or e.g., /tasty-brunch): ' mk_baseurl
  read -p '> Version number: ' mk_version
  read -p '> Author name: ' mk_author
  read -p '> Author email: ' mk_email
  read -p '> Copyright owner: ' mk_owner
  read -p '> Copyright year: ' mk_year
  read -p '> GitHub user or organization name: ' mk_user
  read -p '> GitHub repository name: ' mk_repo

  sed_delete README.md '3d;14,174d;325,328d'
  sed_insert README.md '13i' "${mk_description}"

  find_replace "s/version\": \".*\"/version\": \"${mk_version}\"/g"
  find_replace "s/0\.0\.0\.\.\./${mk_version}.../g"
  find_replace "s/Tasty Brunch App Skeleton/${mk_title}/g"
  find_replace "s/Tasty brunch app skeleton./${mk_description}/g"
  find_replace "s/2017 Evan Sosenko/${mk_year} ${mk_owner}/g"
  find_replace "s/Evan Sosenko/${mk_author}/g"
  find_replace "s/razorx@evansosenko\.com/${mk_email}/g"
  find_replace "s/makenew\/tasty-brunch/${mk_user}\/${mk_repo}/g"
  find_replace "s/makenew-tasty-brunch/${mk_slug}/g"
  find_replace "s/cd tasty-brunch/cd ${mk_repo}/g"
  find_replace "s/makenew.github.io/${mk_domain}/g"
  find_replace "s/\/tasty-brunch/$(echo ${mk_baseurl} | sed s/\\//\\\\\\//g)/g"

  mk_attribution='> Built from [makenew/tasty-brunch](https://github.com/makenew/tasty-brunch).'
  sed_insert README.md '9i' ''
  sed_insert README.md '9i' "${mk_attribution}"

  echo
  echo 'Replacing boilerplate.'
}

check_env 'git read sed xargs'
makenew
stage_env
exit
