#!/usr/bin/env node
/**
 * @file index.js
 * @description cli 入口文件
 */

const path = require('path');
const fs = require('fs-extra')
const program = require('commander');
const chalk = require('chalk');


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


function createApp(name) {

    const root = path.resolve(name);
    const appName = path.basename(root);

    fs.ensureDirSync(name);
    console.log(`create a new app in ${chalk.green(root)}`)

    const packageJson = {
        name: appName,
        version: '0.1.0',
        private: true,
    };
    fs.writeFileSync(
        path.join(root, 'package.json'),
        JSON.stringify(packageJson, null, 4)
    );

    const originalDirectory = process.cwd();
    process.chdir(root);

    run(root, appName, originalDirectory);

}


function run(root, appName, originalDirectory) {
    let preset = await loadRemoteRepo(appName);
    writeIntoRoot(preset)
}


async function loadRemoteRepo() {
    let cmd;
    let args = [
        ''
    ]
}

function writeIntoRoot(preset) {

}
