let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");

 song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    song.pause();
 }
 function change(){
    if(ctrlIcon.classList.contains('fa-play')){
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }else{
        song.pause();
         ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
        
    }
 }
 if(song.play()){
    setInterval(()=>{
         progress.value = song.currentTime;
    },1000)
 }
 progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
        
 }