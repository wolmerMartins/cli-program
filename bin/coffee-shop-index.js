#!/usr/bin/env node

const program = require('commander')

const list = require('../lib/list')

program
    .command('list')
    .alias('l')
    .description('Coffee menu')
    .action(() => list())

program.parse(process.argv)
