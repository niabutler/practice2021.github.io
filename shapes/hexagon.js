console.log("hexagon js is called")

class Hexagon{
    constructor(xC, yC, r, n, strokeStyle, fillStyle){
        this.r = r;
        this.xC = xC;
        this.yC = yC;
        this.n = n;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;


    }

    draw(){
        var y = 0;
        var x = 0;

        ctx.beginPath();
        ctx.lineWidth = 5;
        
        for(var i=0; i<this.n; i++){
            x = this.xC + this.r*Math.cos(i*2*Math.PI / this.n)
            y = this.yC + this.r*Math.sin(i*2*Math.PI / this.n)
            console.log(x,y)
            
            if(i==0){
                ctx.moveTo(x, y);
            }else{
                ctx.lineTo(x, y);
            }
               
        }
        ctx.closePath();
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = H.fillStyle;
        ctx.fill();
        ctx.stroke();

        /*ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(this.xC, this.yC);
            ctx.lineTo(40, 50);
            ctx.lineTo(200, 60);
            ctx.lineTo(90, 100);
            ctx.lineTo(20, 500);
            ctx.lineTo(60, 70);
            ctx.lineTo(40, 50);
            ctx.stroke();
            ctx.strokeStyle = colArray[6];*/


    }

    update(){
        this.draw()
        
    }

    }
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
            H.fillStyle = this.over
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

    













