#!/bin/bash

cd /tmp
rm -rf gh-pages
git clone $GIT_REMOTE_URL gh-pages
cd gh-pages
git checkout gh-pages
git checkout -b gh-pages
git push origin gh-pages
shopt -s extglob dotglob

rm -rf !(.git)
cp -R $1/$2/* .
git add --all .
git commit -a -m "gh-pages"
git push --set-upstream origin gh-pages
