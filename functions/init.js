console.log(" init js is called ")
// basic connection code
canvas = document.querySelector('#myCanvas');

var ctx = canvas.getContext('2d');
var width = 1000;
var height = 750;
canvas.width = width;
canvas.height = height;


// this is an array which in python is called a list 
var colArray=[
    "rgb(255,218,185)", "rgb(255,192,203)", "rgb(255,228,181)", 
    "rgb(255,239,213)","rgb(152,251,152)", "rgb(255,255,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(211,211,211)"
    ]

    