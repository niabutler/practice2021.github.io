console.log("Ball")

class Ball{
    constructor(x,y,r,col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.col = col;
    }

update(){
    this.x +=10;
    this.x = this.x%800;
    this.draw();
}

draw(){
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.fill();
}
}