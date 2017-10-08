const util = require('util')
const exec = util.promisify(require('child_process').exec)
const path = require('path')

const config = require(path.join('..', 'config'))
const utils = require(path.join('.','utils'))

// release on git and npm

// Make a new GitHub release from git metadata based on your commit-convention. In this case angular convention
// source: https://github.com/conventional-changelog/conventional-github-releaser/blob/master/README.md
return  utils.getPreset()
  .then((preset) => {
  return exec('npm publish', {cwd: path.join(config.libPath, 'dist')})
    .then(() => {
        console.log('published on npm')
    })
  })