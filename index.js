#!/usr/bin/env node
var commandLineArgs = require('command-line-args');
var workingDir = process.cwd();

var options = commandLineArgs([
  {name: 'dist', defaultValue: 'dist'},
  {name: 'git-repo', defaultValue: process.env.GIT_REMOTE_URL},
]);

require('child_process')
  .spawn(__dirname + '/release.sh', [workingDir, options.dist, options['git-repo']], {stdio: 'inherit'});
