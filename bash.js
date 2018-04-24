const pwd = require("./pwd.js")
const ls = require("./ls.js")
const cat = require("./cat.js")
const curl = require("./curl.js")

const done = (output)=>{
  process.stdout.write(output)
  process.stdout.write("\nprompt > ")
}

process.stdout.write('\nprompt > ')
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(" ")
  const command = input[0]
  const args = input.slice(1)
  if(command === "pwd"){
    pwd(done)
  }else if(command === "ls"){
    ls(done)
  }else if(command === "cat"){
    cat(done, args[0])
  }else if(command === "curl"){
    curl(done, args[0])
  }else{
    process.stdout.write("Sorry, we don't support that one.")
    process.stdout.write("\nprompt > ")
  }
})