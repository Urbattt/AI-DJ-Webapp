song="";
song2="";
leftWristy="";
leftWristx="";
rightWristy="";
rightWristx="";
scoreLeftWrist=0;

function preload(){
    song=loadSound("Sofia.mp3");
    song2=loadSound("Whatsapp.mp3");
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
        statusofsong=song.isPlaying();

        if(scoreLeftWrist>0.2){
            fill("#008000");
            stroke("#FF0000");
            circle(leftWristx,leftWristy,20);
         song2.stop();
            }

            if(statusofsong=false){
            song.stop();
document.getElementById("name").innerHTML="sofia the first"
            }
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

        }
        
        }