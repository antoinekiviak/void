// Void 0

// tweaks
const period = 3600
const density = 1
const sparsity = 1 // less is better

let canvas
let ctx
let dimensions
let size
let time = 0
let t = 0
let z = 0
let x = 120
let y = 60
let a = 0
let points = []

function resize () {
  const dpr = window.devicePixelRatio
  dimensions = canvas.getBoundingClientRect()
  size = Math.min(window.innerWidth / 3, window.innerHeight / 3)
  canvas.width = dimensions.width * dpr
  canvas.height = dimensions.height * dpr
  ctx.scale(dpr, dpr)
}

function clear () {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

function gen (z, t) {
  z = (z / period) * 2 * Math.PI
  points.push([
    dimensions.width / 2 +
      Math.cos(z + (t / x) * sparsity * 2 * Math.PI) * size,
    dimensions.height / 2 +
      Math.sin(z + (t / y) * sparsity * 2 * Math.PI) * size
  ])
}

function render () {
  let now = Date.now()
  if (now - time > 30) {
    time = now
    points = []
    t = z = 0
    a++
    while (t <= (Math.max(x, y) * density) / sparsity) {
      gen((z += a), t++)
    }
  }
  clear()
  ctx.strokeStyle = 'white'
  ctx.beginPath()
  let point = points[0]
  ctx.moveTo(point[0], point[1])
  for (let point of points) {
    ctx.lineTo(point[0], point[1])
  }
  ctx.stroke()
  window.requestAnimationFrame(render)
}

function run () {
  canvas = document.getElementById('canvasClement')
  ctx = canvas.getContext('2d')

  resize()
  render()
}

document.addEventListener('DOMContentLoaded', run)
window.addEventListener('resize', resize)
