#!/usr/bin/env node
/**
 * @file index.js
 * @description cli 入口文件
 */

const program = require('commander');
const chalk = require('chalk');

program
    .version(require('./package.json').version);

program.parse(process.argv);