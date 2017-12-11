#!/usr/bin/env node
var tild = require('commander');
var open = require("open");

tild
  .option('o, --open [type]', 'Opens [type]')
  .parse(process.argv);

if (tild.open === "docs") {
    console.log("Go to: docs.tild.ga");
    open("https://docs.tild.ga/");
}