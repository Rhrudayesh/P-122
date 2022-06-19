difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);


}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        


    }
}
function modelLoaded(){
    console.log('modelLoadedsuccessfully');

}
function draw(){
background('#696969');
document.getElementById("square_size").innerHTML="The size of the square is"+difference+"px";
fill('#54C9D8');
textSize(difference);
text('Rhrudayesh',50,400);




}
