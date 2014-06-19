/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
  stripDebug = require('broccoli-strip-debug'),
  uncss = require('broccoli-uncss');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

tree = app.toTree();


var env = process.env.EMBER_ENV;
if (env === 'production') {
  console.log('UN CSSing...');
  tree = uncss(tree, {
    html: ['http://winkler1.github.io/cache/'] // << what is this option exactly?
  });


  console.log('stripping debug....');
  tree = stripDebug(tree);
}


module.exports = tree;
