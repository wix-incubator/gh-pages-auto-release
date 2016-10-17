#!/usr/bin/env node
var commandLineArgs = require('command-line-args');
var workingDir = process.cwd();

var options = commandLineArgs([
  {name: 'dist', defaultValue: 'dist'}
]);

require('child_process')
  .spawn(__dirname + '/release.sh', [workingDir, options.dist], {stdio: 'inherit'});
