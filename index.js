const ajax = require('./ajax')

canvas = document.getElementById('paper')
ctx = canvas.getContext('2d')

var mouseX, mouseY, mouseDown = 0
var x = 'black'
var y = 2

var draw = function() {
  ctx.lineTo(mouseX, mouseY)
  ctx.strokeStyle = x
  ctx.lineWidth = penSlider.value
  ctx.stroke()
}

canvas.addEventListener('mousemove', function(e) {
  getMousePos(e)
  if (mouseDown == 1){
    draw(ctx, mouseX, mouseY, penslider.value)
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

var penSlider = document.getElementById('penSlider')
ctx.lineWidth = penSlider.value
penSlider.addEventListener('change', function (){
  ctx.lineWidth = penSlider.value
})

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
    console.log(res.body);
    var imageEl = document.createElement('img')
      imageEl.src = res.body.images.url
      document.body.appendChild(imageEl)
  })
}
