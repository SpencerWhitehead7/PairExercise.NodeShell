const pwd = require("./pwd")
const ls = require("./ls")
const cat = require("./cat")
const curl = require("./curl")

const done = output=>{
  process.stdout.write(output)
  process.stdout.write("\nprompt > ")
}

process.stdout.write('\nprompt > ')
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(" ")
  const command = input[0]
  const args = input.slice(1)
  switch(command){
  case "pwd":
    pwd(done)
    break
  case "ls":
    ls(done)
    break
  case "cat":
    cat(done, args[0])
    break
  case "curl":
    curl(done, args[0])
    break
  default:
    process.stdout.write("Sorry, we don't support that one.")
    process.stdout.write("\nprompt > ")
  }
})