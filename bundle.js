(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

function clearCanvas(canvas, ctx) {
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
  var img = canvas.toDataURL("image/png")
  var gallery = document.createElement('img')
  gallery.src = img
  images.push(img)
  // imagesDb.addImage(img)
  // console.log(imagesDb.getImages)

  document.body.appendChild(gallery)
}

},{}]},{},[1]);
