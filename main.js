song="";
leftWristy="";
leftWristx="";
rightWristy="";
rightWristx="";
scoreLeftWrist=0;
scoreRightWrist=0;


function preload(){
song=loadSound("music.mp3");

}

function setup(){
canvas= createCanvas(500,500);
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
image(video,0,0,500,500);
fill("#008000");
stroke("#FF0000");
circle(rightWristx,rightWristy,20);
if(scoreRightWrist>0.2){
if(rightWristy>0 && rightWristy <=100){
   document.getElementById("speed").innerHTML="speed = 0.5x";
   song.rate(0.5);
}
else if(rightWristy>100 && rightWristy <=200){
    document.getElementById("speed").innerHTML="speed = 1x";
    song.rate(1);
 }
 else if(rightWristy>200 && rightWristy <=300){
    document.getElementById("speed").innerHTML="speed = 1.5x";
    song.rate(1.5);
 }
 else if(rightWristy>300 && rightWristy <=400){
    document.getElementById("speed").innerHTML="speed = 2x";
    song.rate(2);
 }
 else if(rightWristy>400 && rightWristy <=500){
    document.getElementById("speed").innerHTML="speed = 2.5x";
    song.rate(2.5);
 }
}
if(scoreLeftWrist>0.2){
 circle(leftWristx,leftWristy,20);
InNumberleftWristy=Number(leftWristy);
remove_decimals=floor(InNumberleftWristy);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume= "+volume;
song.setVolume(volume);
}
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
scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist= "+scoreLeftWrist);
scoreRightWrist=results[0].pose.keypoints[10].score;
console.log("scoreRightWrist= "+scoreRightWrist);

}

}