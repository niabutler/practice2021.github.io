console.log(" init js is called ")
// basic connection code
canvas = document.querySelector('#myCanvas');
var myScale = 0;

function setupCanvas(canvas) {
    // Get the devie pixel ration falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    myScale=dpr
    myScale =4;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    console.log(rect.width);
    console.log(rect.height);
    // Give canvas pixel dimension of their CSS
    // size * the device pixel ratio
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
}

var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;


var colArray=[
    "rgb(255,218,185)", "rgb(255,192,203)", "rgb(255,228,181)", 
    "rgb(255,239,213)","rgb(152,251,152)", "rgb(255,255,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgba(211,211,211.0.5)"
    ]
