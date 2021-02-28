console.log(" main js is called ")

var B = new Ball(200, 200, 50, colArray[7]);
B.area();
B.update();

var ball_set = []; 
for(var i = 0; i<10; i++){
    var c = i%colArray[0].length
    var temp = new Ball(200+i*60, 400, 25, colArray[c])
    ball_set.push(temp);
}

for(var j=0; j<ball_set.length; j++){
    ball_set[j].update();
}