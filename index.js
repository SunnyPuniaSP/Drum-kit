var c=document.querySelectorAll("button").length;
for(var i=0; i<c; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttoninnerhtml=this.innerHTML;
        producesound(buttoninnerhtml);
        Animation(buttoninnerhtml);
    });
}

document.addEventListener("keydown",function(event){
    producesound(event.key);
    Animation(event.key);
});

function producesound(value){
    switch(value){
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tomj=new Audio("./sounds/crash.mp3");
            tomj.play();
            break;
        case "k":
            var tomk=new Audio("./sounds/kick-bass.mp3");
            tomk.play();
            break;
        case "l":
            var toml=new Audio("./sounds/snare.mp3");
            toml.play();
            break;
        default: console.log("buttoninnerhtml");
    }
}

function Animation(value){
    var o=document.querySelector("."+value);
    o.classList.add("pressed");
    setTimeout(function(){
        o.classList.remove("pressed");
    },100);
}