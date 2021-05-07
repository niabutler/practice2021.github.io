console.log("Bouncing ball")

class BouncingBall{
    constructor(x,y,w,h,c1,R,dy){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = c1;
        this.i = 0;
        this.l = colArray.length;
        this.col = colArray[this.i];
        this.R = R;
        this.dy = dy;
        this.dx = 2;
        this.xC = x + w/2;
        this.yC = y + h/2;
    }

    update(){
        
        if(this.yC > this.y + this.h || this.yC < this.y){
            this.dy = -this.dy
            this.i ++;
            this.i = this.i%this.l
            this.col = colArray[this.i]
            
            
            
        }else{
            //this.col = this.c_2

        }
        

        if(this.xC < this.x || this.xC > this.x + this.w){
            this.dx = -this.dx;
            this.i ++;
            this.i = this.i%this.l
            this.col = colArray[this.i]
        }
     

        this.yC += this.dy;
        this.xC += this.dx;

        this.draw();

    }
    draw(){
        this.drawRect(this.x, this.y, this.w, this.h, this.col);
        this.drawCircle(this.xC, this.yC, this.R, this.col);

    }
    drawRect(x,y,w,h,col){    
        ctx.fillStyle = "rgb(0,0,255)"
        ctx.strokeStyle = "rgb(0,255,0)"
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 20;
        ctx.stroke();
        ctx.fill();
    }
    drawCircle(x,y,R,col){
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(x,y,R,0,2*Math.PI);
        ctx.fillStyle = col;
        ctx.fill();
    }

}