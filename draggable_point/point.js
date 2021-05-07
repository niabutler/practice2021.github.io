console.log("point js has been called")

class Point{
    // class point x,y,r, stroke, fill, over, canvas
    constructor(x, y, r, stroke, fill, over){
        this.x = x;
        this.y = y;
        this.r = r;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;
        // set true if mouse is inside the point circle
        this.inBounds = false;
        // continually registering the mouse position
        this.xMouse = 0;
        this.yMouse = 0;
        // listeners
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));


    }
    mDown(e){
        // if the mouse is pressed and the mouse is inside the point circle, 
        // set the object as taken
        if(this.inBounds){
            Point.taken = this;
        }
        console.log("mouse down")
    }

    mMove(e){
        // event registered every time the mouse moves
        // object variable is updated with current mouse position
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        // update boundary boolean
        this.inBounds = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.r);
        console.log("mouse move")

    }
    mUp(e){
        // where mouse goes up, set taken point as nothing
        // this deselects the point
        Point.taken = "";
        console.log("mouse up")


    }

    update(){
        // make x, y, coordinates of the point the same as the mouse position
        // if the mouse has been taken
        if(Point.taken == this){
            this.x = this.xMouse;
            this.y = this.yMouse;
        }
        this.draw()
    }

    draw(){
        //console.log("draw has been called")
        // change fill state if mouse is over or the point is selected
        if(this.inBounds || Point.taken == this){
            ctx.fillStyle = this.over;
        }else{
            ctx.fillStyle = this.fill;
        }
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 2;
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    //Pythagorus Distance check
  //  @ param x,y, positions of the mouse and of point circle and radius of point circle (number)
   // @ return boolean
    
   boundsCheck(x1, y1, x2, y2, r){
   var d = Math.sqrt( Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
   if(d<r){
       return true;
   }else{
       return false;
   }
}

 //Make x, y coordinates of point available outside of object
// @ return number


getX(){
    return this.x;
}

getY(){
    return this.y;
}


}