console.log(" rotations js is called ")


function drawCircle(x, y, r, fill, fillcolour, stroke, strokecolour, linewidth){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillcolour;
        ctx.fill();
    }
    if(stroke == true){
        ctx.strokeStyle = strokecolour;
        ctx.lineWidth = linewidth;
        ctx.stroke();
    } 
}


function drawRec(x, y, x2, y2, fill, fillcolour, stroke, strokecolour, linewidth){
    ctx.beginPath();
    ctx.rect(x, y, x2, y2);
    if(fill == true){
        ctx.fillStyle = fillcolour;
        ctx.fill();
    }
    if(stroke == true){
        ctx.strokeStyle = strokecolour;
        ctx.lineWidth = linewidth;
        ctx.stroke();
    } 
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
ctx.rotate(30*Math.PI/180);
//drawCircle(80, 60, 50, true, colArray[6], true, colArray[4], 5)
//drawRec(0, 0, 50, 100, true, colArray[6], true, colArray[4], 5)
ctx.restore();

ctx.save();
ctx.translate(300,200);
for(var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRec(0,0, 100, 100, true, "rgba(255,102,102,0.2)", true, colArray[1], 2);
}
ctx.restore();