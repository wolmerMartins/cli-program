#!/usr/bin/env node

const program = require('commander')
const colors = require('colors')

program
    .command('order <type>')
    .alias('o')
    .description('Order a coffee')
    .option('-s, --sugar [value]', 'Sugar level', 'Low')
    .option('-d, --decaf', 'Decaf coffee')
    .option('-c, --cold', 'Cold coffee')
    .option('-S, --served-in [value]', 'Served in', 'Mug')
    .option('--no-stirrer', 'Do not add stirrer')
    .action((coffeeType, args) => {
        console.log('     YOUR ORDER     ')
        console.log('--------------------')
        console.log('Coffee type is %s', colors.green(coffeeType))
        console.log('args.sugar %s', colors.green(args.sugar))
        console.log('args.decaf %s', colors.green(args.decaf))
        console.log('args.cold %s', colors.green(args.cold))
        console.log('args.servedIn %s', colors.green(args.servedIn))
        console.log('args.stirrer %s', colors.green(args.stirrer))
    })

program.parse(process.argv)