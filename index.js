#!/usr/bin/env node
var workingDir = process.cwd();
require('child_process')
  .spawn(__dirname + '/release.sh', [workingDir], {stdio: 'inherit'});
