#!/usr/bin/env node
var program = require('commander');
var open = require('open');
const chalk = require('chalk');
const fs = require('fs');
const download = require('download');
 
program
    .usage("tild <cmd> [type] [options]")
    .version('0.0.1-a.4')
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
        console.log("   tild o d ― Opens Tild's documentation")
        console.log("   tild o s ― Opens Tild's Website")
        console.log("   tild o q ― Opens Tild Quick's Landing Page")
        console.log("   tild o p ― Opens Tild Pro's Landing Page")
        console.log("   tild o c ― Opens Tild's CDN Links Page")
    }
    if (type === "docs" || type === "d" || type === "documentation") {
        console.log("Docs for Tild is located at " + chalk.white.bgBlue("docs.tild.ga"));
        open("http://docs.tild.ga/?ref=cli")
    }
    if (type === "site" || type === "website" || type === "s") {
        console.log("Tild's main website is " + chalk.white.bgBlue("tild.ga"))
        open("https://tild.ga/?ref=cli")
    }
    if (type === "q" || type === "quick") {
        console.log("The landing page for Tild's Quick Version is at " + chalk.white.bgBlue("tild.ga/m"))
        open("https://tild.ga/q?ref=cli")
    }
    if (type === "p" || type === "pro") {
        console.log("The landing page for Tild's Pro Version is at " + chalk.white.bgBlue("tild.ga/pro"))
        open("https://tild.ga/pro?ref=cli")
    }
    if (type === "c" || type === "cdn") {
        console.log("Tild's CDN Links page is at " + chalk.white.bgBlue("tild.ga/cdn-list"))
        open("https://tild-cdn.akaanksh.ga/quick/index.html?ref=cli")
    }
}

if (cmd === 'g' || cmd === 'generate') {
    if (typeof type === "undefined") {
        console.error(chalk.white.bgRed(' No generate argument specified '));
        console.error('Following options are available:');
        console.log("   tild g m [directory] ― Generates Tild Minimal's CSS & Stylus files in [directory]")
    }
    if (type === 'q' || type === 'quick') {
        if (typeof dir === "undefined") {
            download('https://tild-cdn.akaanksh.ga/quick/quick.css', '/');
            download('https://tild-cdn.akaanksh.ga/quick/quick.styl', '/').then(() => {
                console.log('Quick version of Tild was put in ' + chalk.white.bgBlue('/'));
            });
        }
        else {
            download('https://tild-cdn.akaanksh.ga/quick/quick.css', dir);
            download('https://tild-cdn.akaanksh.ga/quick/quick.styl', dir).then(() => {
                console.log('Quick version of Tild was put in ' + chalk.white.bgBlue(dir));
            });
        }
    }
}