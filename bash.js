const pwd = require("./pwd.js")
const ls = require("./ls.js")
const cat = require("./cat.js")

process.stdout.write('\nprompt > ')
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(" ")
  const command = input[0]
  const args = input.slice(1)
  if(command === "pwd"){
    pwd()
  }else if(command === "ls"){
    ls()
  }else if(command === "cat"){
    cat(args[0])
  }else{
    process.stdout.write("Sorry, we don't support that one.")
  }
  setTimeout(function(){
    process.stdout.write('\nprompt > ')}, 0)
})