console.log("main js is called")

var H = new Hexagon(400, 300, 150, 15, colArray[6][2], colArray[2][1]);
var C = new ColourGrid(650, 500, colArray, 15);
// var s = new Star(400, 300, 200, 5, colArray[5][1], colArray[6][2]);


var name_list = ["blue", "orange", "pink"]
var col_list = [colArray[5][3], colArray[1][3], colArray[7][3]];
var button_list = []
var x = 400;
var y = 100;
var w = 200;
var h = 50;
for(var i=0 ; i<name_list.length ; i++){
    var one =  colArray[9][0]
    var two = colArray[6][3]
    var three = col_list[i]
    
        button_list.push( new Button(x,y+i*h, w, h, name_list[i], one, col_list[i], col_list[i] ))

    
}

function animate(){
    ctx.clearRect(0, 0, width, height);
    //s.update();
    H.update();
    //C.update();
   for(var i=0; i<button_list.length ; i++){
        button_list[i].update();
    }

    window.requestAnimationFrame(animate);
} 

animate();