const request = require('superagent')

module.exports = {
  getImages,
  postImage
}

function getImages(callback){
  request
    .get('https://mel-draw.herokuapp.com/api/v1/images')
    .end(function(err, res){
      callback(null, res)
    })
}

function postImage(url, callback){
  request
    .post('https://mel-draw.herokuapp.com/api/v1/images')
    .send({url})
    .end(callback)
}
