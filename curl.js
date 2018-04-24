const request = require("request")

module.exports = function(done, url) {
  request.get(url, (error, response, body)=>{
    if(error){
      done(error)
    }else{
      done(body)
    }
  })
}