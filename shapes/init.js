console.log(" init js is called ")
// basic connection code
canvas = document.querySelector('#myCanvas');
var myScale = 0;

function setupCanvas(canvas) {
    // Get the devie pixel ration falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    myScale=dpr
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


class Grid{
    constructor(width, height, tick){
        this.w = width;
        this.h = height;
        this.tick = tick;
    }

    update(){
        for(var i=0; i<width; i+= this.tick){
            this.drawLine(i, 0, i, this.h)
            this.drawLine(0, i, this.w, i);
        }
    }

    drawLine(x, y, x2, y2){
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

}


class ColourGrid{
    constructor(x, y, colArray, s){
        this.x = x;
        this.y = y;
        this.s = s
        this.c = colArray;
    }

    update(){
        this.draw();
    }

    draw(){
        var s = this.s
        for(var i=0; i<this.c.length; i++){
            for(var j=0; j<this.c[i].length; j++){
                this.drawSquare(this.x+s*i, this.y+s*j, s, this.c[i][j])
            }
        }
       
        }

    

    drawSquare(x, y, s, col){
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.rect(x, y, s, s);
        ctx.fill();
    }
}




var colArray=[
    // red
    [ "rgba(255,0,0,0.25)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.70)", "rgba(255,0,0,1)"],
    // orange
    [ "rgba(255,127,80,0.25)", "rgba(255,127,80,0.5)", "rgba(255,127,80,0.75)", "rgba(255,127,80,1)"],
    // yellow
    [ "rgba(255,215,0,0.25)", "rgba(255,215,0,0.5)", "rgba(255,215,0,0.75)", "rgba(255,215,0,1)"],
    // green light
    [ "rgba(124,252,0,0.25)", "rgba(124,252,0,0.5)", "rgba(124,252,0,0.75)", "rgba(124,252,0,1)"],
    // green
    [ "rgba(34,139,34,0.25)", "rgba(34,139,34,0.5)", "rgba(34,139,34,0.75)", "rgba(34,139,34,1)"],
    // blue
    [ "rgba(30,144,255,0.25)", "rgba(30,144,255,0.5)", "rgba(30,144,255,0.75)", "rgba(30,144,255,1)"],
    // blue dark
    [ "rgba(0,0,139,0.25)", "rgba(0,0,139,0.5)", "rgba(0,0,139,0.75)", "rgba(0,0,139,1)"],
    // pink
    [ "rgba(255,20,147,0.25)", "rgba(255,20,147,0.5)", "rgba(255,20,147,0.75)", "rgba(255,20,147,1)"],
    // purple
    [ "rgba(75,0,130,0.25)", "rgba(75,0,130,0.5)", "rgba(75,0,130,0.75)", "rgba(75,0,130,1)"],
    // b,w and g
    [ "rgba(255,255,255,1)", "rgba(204,204,206,1)", "rgba(134,136,138,1)", "rgba(0,0,0,1)"]
]



