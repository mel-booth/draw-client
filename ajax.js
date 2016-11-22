const request = require('superagent')

module.exports = {
  getImages,
  postImage
}

function getImages(callback){
  request
    .get('http://localhost:3000/api/v1/images')
    .end(function(err, res){
      console.log(res.body.images)
      callback(null, res)
    })
}

function postImage(url, callback){
  request
    .post('http://localhost:3000/api/v1/images')
    .send({url})
    .end(callback)
}
