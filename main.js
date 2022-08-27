noseX = 0;
noseY = 0;
leftWristX=0;
rightWristX=0;
difference = 0;

function preload(){
    
}
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(560, 150);

classify = ml5.poseNet(video, modelLoaded);
classify.on("pose", gotResults);
}
function gotResults(results){
if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("nose X = "+ noseX+ "nose Y = "+ noseY);

    rightWristX= results[0].pose.rightWrist.x;
    leftWristX= results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Right wrist X = "+ rightWristX+", Left wrist X = "+leftWristX+", difference = "+difference);
}
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
background("#FFFFFF");
document.getElementById("size_square").innerHTML=difference;
fill("#ADD8E6");
stroke("#ADD8E6");
square(noseX, noseY, difference);
}
