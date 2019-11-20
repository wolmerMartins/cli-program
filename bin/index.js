#!/usr/bin/env node

const program = require('commander')

const list = require('../lib/list')
const order = require('../lib/order')

program
    .command('list')
    .alias('ls')
    .description('List coffee menu')
    .action(() => list())
    
program
    .command('order')
    .alias('o')
    .description('Order a coffee')
    .action(() => order())

program.parse(process.argv)
