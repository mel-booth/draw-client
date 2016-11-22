const ajax = require('./ajax')

// var imagesDb = require('../db/images')

canvas = document.getElementById('paper')
ctx = canvas.getContext('2d')

var mouseX, mouseY, mouseDown = 0
var x = 'black'
var y = 2

var draw = function() {
    ctx.lineTo(mouseX, mouseY)
    ctx.strokeStyle = x
    ctx.lineWidth = y
    ctx.stroke()
}

canvas.addEventListener('mousemove', function(e) {
  getMousePos(e)
  if (mouseDown ==1){
    draw(ctx, mouseX, mouseY, 2)
  }
})

canvas.addEventListener('mousedown', function(evt) {
    ctx.beginPath()
    ctx.moveTo(mouseX, mouseY)

    canvas.addEventListener('mousemove', draw, false)
}, false)

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', draw, false)
}, false)

document.getElementById('clear').onclick=function(e){
  e.preventDefault()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function colour(obj) {
  switch (obj.id) {
    case 'black':
      x = 'black'
      break
    case 'green':
      x = 'green'
      break
    case 'violet':
      x = 'violet'
      break
    case 'orange':
      x = 'orange'
      break
    case 'blue':
      x = 'blue'
      break
    case 'grey':
      x = 'grey'
      break
    case 'red':
      x = 'red'
      break
    case 'yellow':
      x = 'yellow'
      break
    case 'indigo':
      x = 'indigo'
      break
    case 'white':
      x = 'white'
      break
  }
  if (x =='white') y = 15
  else y = 2
}

function getMousePos(e) {
  if (!e)
    var e = event
  if (e.offsetX) {
    mouseX = e.offsetX
    mouseY = e.offsetY
  }
  else if (e.layerX) {
    mouseX = e.layerX
    mouseY = e.layerY
  }
 }


var images = []
document.getElementById('save').onclick=function(e){
  e.preventDefault()
  var url = canvas.toDataURL("image/png")
  ajax.postImage(url, function(err, res){
    //get the current list of images
    ajax.getImages(function(err, res){
      console.log('this is the getImages ', err, res);
      images = res.body.images.map(function(image){
        return image.url
      })
      images.map(function(image){
        var imageEl = document.createElement('img')
        imageEl.src = image
        document.body.appendChild(imageEl)
      })
    })
  })
}


// ajax.getImages(function(res){
//   console.log(res)
// })
