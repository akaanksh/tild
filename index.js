#!/usr/bin/env node
var program = require('commander');
var open = require('open');
const chalk = require('chalk');
const fs = require('fs');
const download = require('download');
 
program
    .usage("tild <cmd> [type] [options]")
    .version('0.1.0')
    .arguments('<cmdVal> [typeVal] [dirVal]')
    .action(function (cmdVal, typeVal, dirVal) {
        cmd = cmdVal;
        type = typeVal;
        dir = dirVal;
    });
 
program.parse(process.argv);
 
if (typeof cmd === 'undefined') {
   console.error('No command given!');
   process.exit(1);
}

if (cmd === "o" || cmd === "open") {
    if (typeof type === "undefined") {
        console.error(chalk.white.bgRed(' No link argument specified '));
        console.error('Following options are available:');
        console.log("   tild o d ― Opens Tild's documentaion")
        console.log("   tild o s ― Opens Tild's Website")
        console.log("   tild o m ― Opens Tild Minimal's Landing Page")
        console.log("   tild o p ― Opens Tild Pro's Landing Page")
        console.log("   tild o c ― Opens Tild's CDN Links Page")
    }
    if (type === "docs" || type === "d" || type === "documentation") {
        console.log("Docs for Tild is located at " + chalk.white.bgBlue("docs.tild.ga"));
        open("http://docs.tild.ga/?ref=cli")
    }
    if (type === "site" || type === "website") {
        console.log("Tild's main website is " + chalk.white.bgBlue("tild.ga"))
        open("https://tild.ga/?ref=cli")
    }
    if (type === "m" || type === "minimal") {
        console.log("The landing page for Tild's Minimal Version is at " + chalk.white.bgBlue("tild.ga/m"))
        open("https://tild.ga/m?ref=cli")
    }
    if (type === "p" || type === "pro") {
        console.log("The landing page for Tild's Pro Version is at " + chalk.white.bgBlue("tild.ga/pro"))
        open("https://tild.ga/pro?ref=cli")
    }
    if (type === "c" || type === "cdn") {
        console.log("Tild's CDN Links page is at " + chalk.white.bgBlue("tild.ga/cdn-list"))
        open("https://tild.ga/cdn-list?ref=cli")
    }
}

if (cmd === 'g' || cmd === 'generate') {
    if (typeof type === "undefined") {
        console.error(chalk.white.bgRed(' No generate argument specified '));
        console.error('Following options are available:');
        console.log("   tild g m [directory] ― Generates Tild Minimal's CSS & Stylus files in [directory]")
    }
    if (type === 'm' || type === 'minimal') {
        if (typeof dir === "undefined") {
            download('https://akaanksh.github.io/tild/minimal/minimal.css', '/');
            download('https://akaanksh.github.io/tild/minimal/minimal.styl', '/').then(() => {
                console.log('Minimal version of Tild was put in ' + chalk.white.bgBlue(dir));
            });
        }
        else {
            download('https://akaanksh.github.io/tild/minimal/minimal.css', dir);
            download('https://akaanksh.github.io/tild/minimal/minimal.styl', dir).then(() => {
                console.log('Minimal version of Tild was put in ' + chalk.white.bgBlue(dir));
            });
        }
    }
}