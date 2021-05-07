nosex = 0;
nosey = 0;

left_wristx=0;
right_wristx=0;

difference=0;

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialised");
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="The width and height of the square will be ="+difference+ "px";
    fill('#F90093');
    stroke('#F90093');
    square(nosex,nosey,difference);
}

function gotPoses(results){
    
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;

        console.log("noseX=" + nosex + "noseY="+nosey);

        left_wristx=results[0].pose.leftWrist.x;
        right_wristx=results[0].pose.rightWrist.x;

        difference=floor(left_wristx-right_wristx);
        console.log("left wristx="+left_wristx+"right wristx="+right_wristx+"difference="+difference);
    }
}

