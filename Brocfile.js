/* global require, module */

// Closure Compiler caused Uncaught Error: Could not find module ember-hello/app..not using.

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
  htmlmin = require('broccoli-htmlmin'),
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

if (process.env.EMBER_ENV === 'production') {
// UnCSS is making CSS *bigger*...wtf?!
//  console.log('UN CSSing...');
//  tree = uncss(tree, {
//    html: ['http://winkler1.github.io/cache/'] // << what is this option exactly?
//  });

  tree=htmlmin(tree, {empty:true}); // KEEP empty attributes. https://github.com/Moveo/minimize
  tree=stripDebug(tree);
}


module.exports = tree;
