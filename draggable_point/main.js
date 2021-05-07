var P = new Point(200,200,50,colArray[3],colArray[4], colArray[5]);



function animate(){
    ctx.clearRect(0, 0, width, height);
    P.update();

    window.requestAnimationFrame(animate);
} 

animate();













