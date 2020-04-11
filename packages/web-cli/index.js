#!/usr/bin/env node
/**
 * @file index.js
 * @description cli 入口文件
 */

const path = require('path');
const fs = require('fs-extra')
const program = require('commander');
const chalk = require('chalk');
const download = require('download-git-repo');

let projectName;

program
    .version(require('./package.json').version)
    .arguments('[name]')
    .action(name => {
        projectName = name;
    })
    .parse(process.argv);

if (typeof projectName === 'undefined') {
    console.error('please specify the project name');
    process.exit(1);
}

createApp(projectName);


async function createApp(name) {

    const root = path.resolve(name);
    const appName = path.basename(root);

    fs.ensureDirSync(name);
    console.log(`create a new app in ${chalk.green(root)}`)

    const originalDirectory = process.cwd();
    process.chdir(root);

    await run(root, appName, originalDirectory);
    console.log('done');
}


async function run(root, appName) {
    fs.emptyDirSync(root);

    let preset = await getPreset(appName, root);

    await writeIntoRoot(preset);
}


async function loadRemoteTpl(appName, repo) {
    console.log("begin load remote template");

    await new Promise((resolve, reject) => {
        download(
            repo.name,
            repo.tmp, 
            err => {
                if (err) {
                    reject(err);
                    console.log(chalk.red('load repo faild'));
                } else {
                    resolve();
                    console.log('load repo successful');
                }
            }
        )
    })
}

async function writeIntoRoot(preset) {
    // console.log("write into root");
}

async function getPreset(appName, root) {
    const repo = {
        name: 'Fantasy15/web-template',
        tmp: 'tmp'
    };
    await loadRemoteTpl(appName, repo);

    await fs.copySync(path.resolve(repo.tmp), root);
    console.log('copy successful');
}
