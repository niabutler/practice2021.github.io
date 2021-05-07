console.log(" five dot js is called ")

//create the class with constructor 
// include the functions only with console logs
// test at this stage for problems

class FiveDot{
    constructor(xC, yC, s, c1, c2, c3){
        this.xC = xC;
        this.yC = yC;
        this.s = s;
        this.r = s/8;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;

    }

    update(){
        this.draw()
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.xC - this.s/2, this.yC - this.s/2, this.s, this.s);
        ctx.fillStyle = this.c1;
        ctx.fill();
        // top left
        this.drawCircle(this.xC - this.s/2, this.yC - this.s/2, this.r, this.c3);
        // top right
        this.drawCircle(this.xC + this.s/2, this.yC - this.s/2, this.r, this.c3);
        // bottom left
        this.drawCircle(this.xC - this.s/2, this.yC + this.s/2, this.r, this.c3);
        // bottom right
        this.drawCircle(this.xC + this.s/2, this.yC + this.s/2, this.r, this.c3);
        // center C
        this.drawCircle(this.xC, this.yC, this.r, this.c2);
    
    }

    drawCircle(x,y,r,col){
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fillStyle = col;
        ctx.fill();
    }
}