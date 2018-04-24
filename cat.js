const fs = require("fs")

module.exports = function(done, file) {
  fs.readFile(`${file}`, "utf8", (err, content)=>{
    if(err){
      done(err)
    }else{
      done(content)
    }
  })
}