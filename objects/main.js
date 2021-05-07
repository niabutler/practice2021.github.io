console.log(" main js is called ")

/* var B = new Ball(200, 200, 50, colArray[7]);
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
} */

var objectSet = [] //empty array

var FDone = new FiveDot(200, 400, 100, colArray[2], colArray[4], colArray[6]);
var FDtwo = new FiveDot(600, 400, 100, colArray[2], colArray[4], colArray[6]);
var FDthree = new FiveDot(500, 300, 100, colArray[2], colArray[4], colArray[6]);
var FDfour = new FiveDot(100, 500, 100, colArray[2], colArray[4], colArray[6]);
objectSet.push(FDone, FDtwo, FDthree, FDfour);
objectSet.push(new FiveDotRotate(300, 200, 100, colArray[2], colArray[4], colArray[6], 60))
console.log(objectSet);
for(var i=0 ; i<objectSet.length; i++ ){
    objectSet[i].update();
}


