//Fade function complete
//Menu Content adding
let rgbaControl = document.getElementById("Background");
let MenuContent = document.getElementById("Sidemenucontent");
let Checked = true;

function fadeOut(){
        let fade = 0.3;
        let Plustimer = setInterval(function(){
        rgbaControl.style.background = 'rgba(0,0,0,'+fade+')';
        fade += 0.1;
        if(fade >= 1.0){
            MenuContent.style.display = 'block';
            clearInterval(Plustimer);
        }
    },25);
}

function fadeIn(){
        let fade = 1.0;
        let Minustimer = setInterval(function(){
            rgbaControl.style.background = 'rgba(0,0,0,'+fade+')';
            fade -= 0.1;
            if(fade <= 0.9){
                MenuContent.style.display = 'none';
            }
            if(fade <= 0.3){
                clearInterval(Minustimer);
            }
        },25);
}


   function sideActive(){
    if(Checked){
        Checked = false;
        fadeOut();
        
        
    }
    else if(Checked === false){
        Checked = true;
        fadeIn();
        
    }
    
}