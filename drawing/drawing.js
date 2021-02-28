console.log(" drawing js is called ")
// basic connection code
canvas = document.querySelector('#myCanvas');

var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;


// this is an array which in python is called a list 
var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
    ]

    console.log(colArray[0])

ctx.fillStyle = colArray[5]
ctx.strokeStyle = colArray[7]
ctx.lineWidth = 6
ctx.beginPath()
ctx.rect(75, 80, 300, 200)
ctx.fill()
ctx.stroke()

ctx.fillStyle = colArray[8]
ctx.strokeStyle = colArray[1]
ctx.lineWidth = 10
ctx.beginPath()
ctx.arc(400, 300, 45, 0, 2*Math.PI)
ctx.fill()
ctx.stroke()

ctx.strokeStyle = colArray[7]
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(400, 10)
ctx.lineTo(400, 500)
ctx.stroke()





