'use strict'

const childProcess = require('child_process')

const CONFIG = require('../config')

module.exports = function () {
  console.log('Installing apm')
  childProcess.execFileSync(
    CONFIG.getNpmBinPath(),
    ['--loglevel=error', 'install'],
    {env: process.env, cwd: CONFIG.apmRootPath}
  )
}
