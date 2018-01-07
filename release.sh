#!/bin/bash

cd /tmp
rm -rf gh-pages
git clone $3 gh-pages
cd gh-pages
git checkout --orphan gh-pages
shopt -s extglob dotglob

rm -rf !(.git|.|..)
cp -R $1/$2/* .
git add --all .
git commit -a -m "gh-pages"
git push --set-upstream --force origin gh-pages
