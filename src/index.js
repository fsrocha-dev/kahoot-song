#!/usr/bin/env node

const exect = require('child_process').exec;
const path = require('path');
const fs = require('fs');

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, './songs/kahoot');

const kahoot = function () {
  const linuxcmd = 'paplay ' + soundPath + '.ogg';
  const windowscmd = path.join(mainPath, './forWindows.vbs') + ' ' + soundPath + '.mp3';
  const maccmd = 'afplay ' + soundPath + '.mp3';

  const platform = process.platform;

  switch (platform) {
    case 'linux':
      return exec(linuxcmd);
    case 'win32':
      return exec(windowscmd);
    case 'darwin':
      return exec(maccmd);
    default:
      return exec(linuxcmd);
  }

  function exec(cmd) {
    return exect(cmd, function (error, stdout, stderr) {
      if (error) console.error(error);
    });
  }
};

module.exports = kahoot;

if (!module.parent) {
  kahoot();
}