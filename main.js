song="";
leftWristy="";
leftWristx="";
rightWristy="";
rightWristx="";

function preload(){
song=loadSound("music.mp3");

}

function setup(){
canvas= createCanvas(400,400);
canvas.center();

video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
image(video,0,0,400,400);

}

function play(){
song.play();
song.setVolume(1);
song.rate(1);

}

function pause(){
song.pause();

}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristx=results[0].pose.leftWrist.x;
leftWristy=results[0].pose.leftWrist.y;
console.log("leftWristx= "+leftWristx+"leftWristy= "+leftWristy);
rightWristx=results[0].pose.rightWrist.x;
rightWristy=results[0].pose.rightWrist.y;
console.log("rightWristx= "+rightWristx+"rightWristy= "+rightWristy);

}

}