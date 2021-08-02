video="";
status="";

function preload(){
 video=createVideo('video.mp4');
 video.hide();   
}

function setup(){
    canvas=createCanvas(480, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Polki is detecting";
}

function modelLoaded(){
    console.log("Polki has loaded the model");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}