function bigRedButton1(){

    for(var i = 1; i <= 12; i++){
        document.getElementById(i + "a").pause();
    }

    var index = Math.floor(Math.random() * 12) + 1;

    song = document.getElementById(index + "a");
    
    song.currentTime = 0;

    song.play();

    document.getElementById("songTitle").style = "display: none;"

    document.getElementById("songTitle").innerHTML = document.getElementById(index).className
}

function bigRedButton2(){

    for(var i = 1; i <= 12; i++){
        document.getElementById(i + "a").pause();
    }

    var index = Math.floor(Math.random() * 12) + 1;

    song = document.getElementById(index + "a");

    song.currentTime = Math.floor(song.duration * Math.random());

    song.play();

    document.getElementById("songTitle").style = "display: none;"

    document.getElementById("songTitle").innerHTML = document.getElementById(index).className
}

function showTitle(){
    document.getElementById("songTitle").style = "display: block;"
}