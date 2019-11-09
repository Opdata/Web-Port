//Complete
let video = document.getElementById("Video");
let muteState = false;

function myFunction(){
    if(muteState == false){
        video.muted = false;
        muteState = true;
    }
    else if(muteState == true){
        video.muted = true;
        muteState = false;
    }
}