console.log(" loops js is called ")


function drawCircle(x, y, r, fillcolour, strokecolour, linewidth){
    ctx.fillStyle = fillcolour;
    ctx.strokeStyle = strokecolour;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawRec(x, y, x2, y2, fillcolour, strokecolour, linewidth){
    ctx.fillStyle = fillcolour;
    ctx.strokeStyle = strokecolour;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    ctx.rect(x, y, x2, y2)
    ctx.fill();
    ctx.stroke();
}

function drawLine(x, y, x2, y2, strokecolour, linewidth){
    ctx.strokeStyle = strokecolour;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function drawText(align, text, x, y, fillstyle){
    var w = 200;
    var h = 100;
    ctx.fillStyle = "rgb(200,200,200)";
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.textAlign = align;
    ctx.textBaseline = "middle";
    ctx.fillStyle = fillstyle;
    ctx.font = "40px sans-serif"
    ctx.fillText(text, x+w/2, y+h/2);
}

ctx.save();
ctx.translate(300,200);
drawCircle(800, 600, 50, colArray[6], colArray[4], 5)
draw(800, 600, 50, colArray[6], colArray[4], 5)


for( var i=0 ; i<8; i++){
    console.log(i);
    makeCircle(40 + 70*i, 400, 10, colArray[2], colArray[4], 5)
}

for( var j=0 ; j<8; j++){
    console.log(j);
    makeCircle(500, 10 + 70*j, 10, colArray[2], colArray[4], 5)
}

for(var k = 0; k<5; k++){

    for(var j=0 ; j<8; j++){
        makeCircle(10 + 30*k , 10 + 30*j, 10, colArray[2], colArray[4], 5)
    }

}


drawCircle(800, 600, 50, colArray[6], colArray[4], 5)
createText("center", "Hello", 400, 300, colArray[2])