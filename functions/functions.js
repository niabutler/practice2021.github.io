
    console.log(colArray[0])

    function makeCircle(x, y, r, fillcolour, strokecolour, linewidth){
        ctx.fillStyle = fillcolour;
        ctx.strokeStyle = strokecolour;
        ctx.lineWidth = linewidth;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    function makeRec(x, y, x2, y2, fillcolour, strokecolour, linewidth){
        ctx.fillStyle = fillcolour;
        ctx.strokeStyle = strokecolour;
        ctx.lineWidth = linewidth;
        ctx.beginPath();
        ctx.rect(x, y, x2, y2)
        ctx.fill();
        ctx.stroke();
    }

    function makeLine(x, y, x2, y2, strokecolour, linewidth){
        ctx.strokeStyle = strokecolour;
        ctx.lineWidth = linewidth;
        ctx.beginPath();
        ctx.moveTo(x, y)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }

    function createText(align, text, x, y, fillstyle){
        var w = 200;
        var h = 100;
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.fill();
        ctx.textAlign = align;
        ctx.textBaseline = "middle";
        ctx.fillStyle = fillstyle;
        ctx.font = "40px sans-serif"
        ctx.fillText(text, x+w/2, y+h/2);
    }

makeRec(60, 80, 500, 400, colArray[1], colArray[5], 2)
makeRec(90, 120, 400, 300, colArray[6], colArray[1], 2)

makeCircle(60, 80, 40, colArray[3], colArray[5], 2)
makeCircle(100, 480, 200, colArray[4], colArray[5], 2)
makeCircle(400, 400, 20, colArray[4], colArray[5], 2)
makeCircle(50, 250, 100, colArray[7], colArray[5], 2)
makeCircle(600, 80, 70, colArray[2], colArray[5], 2)
makeCircle(60, 900, 40, colArray[1], colArray[5], 2)

makeLine(50, 50, 200, 200, colArray[7], 7)
createText("center", "Hello", 250, 200, colArray[8] )

