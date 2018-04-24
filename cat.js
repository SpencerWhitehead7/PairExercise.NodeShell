const fs = require("fs")

module.exports = function() {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()
    if(cmd.slice(0,3)==="cat"){
      fs.readFile(`./${cmd.slice(4)}`, "utf8", (err, content)=>{
        if(err){
          throw err
        }else{
          process.stdout.write(content)
          process.stdout.write('\nprompt > ')
        }
      })
    }
  })
}