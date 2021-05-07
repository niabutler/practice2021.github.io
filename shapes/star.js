console.log("hexagon js is called")

class Star{
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
        var n = this.n * 2
        var r_small = this.r/3
        var R;


        ctx.beginPath();
        ctx.lineWidth = 5;

        
        for(var i=0; i<n; i++){
            if (i%2==0){
                R = this.r
            }else{
                R = r_small
            }
            x = this.xC + R*Math.cos(i*2*Math.PI / n)
            y = this.yC + R*Math.sin(i*2*Math.PI / n)
            console.log(x,y)
            
            if(i==0){
                ctx.moveTo(x, y);
            }else{
                ctx.lineTo(x, y);
            }
               
        }
        ctx.closePath();
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
        ctx.stroke();


    }

    update(){
        this.draw()
        
    }

    }/*
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
    
    Button.clicked = "";*/

    













