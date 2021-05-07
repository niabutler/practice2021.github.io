class ControlObject{
    constructor(canvas){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;

        this.objectSet = []
        this.r 
        this.drawCircle

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }


    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
    }


    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }


    mUp(e){
        this.mouseDown = false;
        var temp = new Circle(this.xMouseStart+this.w/2, this.yMouseStart+this.h/2, this.r, "rgb(0,0,0")
        this.objectSet.push(temp);
    }


    update(){
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();

        }

        for(var i=0 ; i< this.objectSet.length; i++){
            this.objectSet[i].update()
        }
    }

        draw(){
            this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);
            var x = this.xMouseStart+this.w/2;
            var y = this.yMouseStart+this.h/2;
         
           
            if(Math.abs(this.h) < Math.abs(this.w)){
                this.r = Math.abs(this.h/2);
            }
            else{
                this.r = Math.abs(this.w/2);
            }
                
            this.drawCircle(x, y, this.r);
        
    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.strokeStyle = "rgb(0,230,200)";
        ctx.stroke()
    }
    drawCircle(x,y,r, col1, col2){
        ctx.strokeStyle = col1;
        ctx.fillStyle = col2;
        ctx.beginPath();
        ctx.arc(x,y,r, 0,2*Math.PI)
        ctx.fill();
        ctx.stroke();
    }

}

class Circle{
    constructor(x,y,r,col){
        this.x = x
        this.y = y
        this.r = r
        this.col = col
        console.log("a circle has been instantiated")
    }
    update(){
        this.draw();
    }

    draw(){
        ctx.fillStyle = this.col;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
        ctx.fill();
    }
}

class Rectangle{
    constructor(x,y,w,h,col){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        console.log("A rectangle has been instantiated");
    }
    update(){
        this.draw();
}

draw(){
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h)
    ctx.fill();
}





}