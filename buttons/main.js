console.log("main js is called")

var G = new Grid(width, height, 50);
//* var C = new showColours(colArray, 800, 500, 200)

var name_list = ["press me", "hello", "what up"]
var button_list = []
var x = 400;
var y = 100;
var w = 200;
var h = 50;
for(var i=0 ; i<name_list.length ; i++){
    button_list.push(new Button(x,y+i*h, w, h, name_list[i], colArray[3], colArray[4], colArray[6]))
}


/*var x = 400;
var y = 100;
var w = 200;
var h = 50; 

var B = new Button(x, y, w, h, "hello", colArray[6], colArray[2], colArray[5])
*/


function animate(){
    ctx.clearRect(0, 0, width, height);
    G.update();
    //B.update();
    //* C.update();
    for(var i=0; i<button_list.length ; i++){
        button_list[i].update();
    }

    window.requestAnimationFrame(animate);
} 

animate();


