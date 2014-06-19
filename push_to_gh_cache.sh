# Build an Ember-CLI project, and push it to Github Pages.
# Prereqs: 
# 1. you have configured a repo with GH pages:
# https://help.github.com/articles/creating-project-pages-manually
# 2. 

GITHUB_USER=winkler1
GITHUB_PROJECT=cache


# TODO: git update if it exists.
REPO=git@github.com:$GITHUB_USER/$GITHUB_PROJECT.git
echo ------------------------------------------------------
echo Attempting push to $REPO
echo ------------------------------------------------------
rm -rf __gh_temp__
rm -rf dist
git clone $REPO __gh_temp__

# Build and copy files.
ember build --environment production

# Push to Github.
cd __gh_temp__
cp -r ../dist/** .
git checkout -q gh-pages
git add .

echo ------------------------------------------------------
echo Pushing changes to $REPO
echo ------------------------------------------------------
git commit -a -m 'ember build --environment production'
git push origin gh-pages

cd ..

echo ''
echo --------------------------------------------------------------------------------------------
echo Your page will be at http://$GITHUB_USER.github.io/$GITHUB_PROJECT/
echo Be sure your config/environment.js sets ENV.baseURL:\'/$GITHUB_PROJECT/\'.
echo --------------------------------------------------------------------------------------------


# Uncomment this to clean up:
# rm -rf __gh_temp__

# Error proofing to be done:
# check ember installed
# check gh-pages exists
# checkout fails
