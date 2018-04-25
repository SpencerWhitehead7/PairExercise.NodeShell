const fs = require("fs")

module.exports = done=>{
  fs.readdir("./", "utf8", (err, files)=>{
    err ? done(err) : done(files.join("\n"))
  })
}