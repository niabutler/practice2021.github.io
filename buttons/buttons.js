

class Button{
    constructor(x, y, w, h, text, c1, c2, c3){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    this.outline = c1;
    this.fill = c2;
    this.over = c3;
    canvas.addEventListener('click', this.mClick.bind(this));
    canvas.addEventListener('mousemove', this.mMove.bind(this));


    this.xMouse = 0;
    this.yMouse = 0;
    this.inBounds = false;
}

mClick(e){
    console.log("clicked");
    if(this.inBounds){
        Button.clicked = this;
    }


}

mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    // console.log(this.xMouse);
    this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    console.log(this.inBounds);



}


inBoundsCheck(xM, yM, x, y, w, h){
    if(xM > x && xM < x+w && yM > y && yM < y+h){
        return true;
    }else{return false;
    }

}
update(){
    this.draw();
}


draw(){
    ctx.strokeStyle = this.outline;
    ctx.fillStyle = this.fill;
    ctx.linewidth = 2;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = this.outline;
    

    if(this.inBounds || Button.clicked == this){
        ctx.lineWidth = 4;
        ctx.fillStyle = this.over;
        ctx.fill();
        // set fill style for text
        ctx.fillStyle = this.outline;
    }else{
        ctx.fillStyle = this.fill;
        ctx.fill();
        // set fill style for text
        ctx.fillStyle = this.outline;
    }

    ctx.stroke()


    var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif ";
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font=myFont;
    ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
}

}

Button.clicked = "";



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

