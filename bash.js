const pwd = require("./pwd.js")
const ls = require("./ls.js")
const cat = require("./cat.js")

process.stdout.write('\nprompt > ')
process.stdin.on('data', (data))

pwd()
ls()
cat()