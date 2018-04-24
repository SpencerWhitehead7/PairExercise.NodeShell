const fs = require("fs")

module.exports = function(file) {
  fs.readFile(`${file}`, "utf8", (err, content)=>{
    if(err){
      throw err
    }else{
      process.stdout.write(content)
    }
  })
}