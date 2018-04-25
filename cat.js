const fs = require("fs")

module.exports = (done, file)=>{
  fs.readFile(file, "utf8", (err, content)=>{
    err ? done(err) : done(content)
  })
}