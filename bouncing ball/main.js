console.log("main is called")

objectSet = [];
/*
var BBOne = new BouncingBall(100, 200, 300, 270, colArray[4], 10, -1);
var BBTwo = new BouncingBall(200, 200, 300, 270, colArray[4], 10, 1);
var BBThree = new BouncingBall(300,200, 300, 270, colArray[4], 10, 2);
*/
var BBFour = new BouncingBall(400, 200, 300, 270, colArray[4], 10, 3);
//objectSet.push(BBOne, BBTwo, BBThree, BBFour);

objectSet.push(BBFour);
console.log(BBFour);

function animation(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }



    window.requestAnimationFrame(animation);

}

animation();