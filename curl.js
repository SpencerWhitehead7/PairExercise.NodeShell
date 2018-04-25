const request = require("request")

module.exports = (done, url)=>{
  request.get(url, (err, response, body)=>{
    err ? done(err) : done(body)
  })
}