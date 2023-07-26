console.log("Welcome to spotify")

let songIndex = 0 ;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))

let songs = [
    {songName: "Let me Love You",filePath:"songs/1.mp3",coverPath:"covers/cover1.jpg",duration:"03:26"},
    {songName: "Perfect",filePath:"songs/2.mp3",coverPath:"covers/2.jpg",duration:"04:23"},
    {songName: "295",filePath:"songs/3.mp3",coverPath:"covers/3.jpg",duration:"04:32"},
    {songName: "Tere Vaaste",filePath:"songs/4.mp3",coverPath:"covers/4.webp",duration:"03:01"},
    {songName: "Maan meri Jaan",filePath:"songs/5.mp3",coverPath:"covers/5.jpg",duration:"03:14"},
    {songName: "Night Changes",filePath:"songs/6.mp3",coverPath:"covers/6.jpeg",duration:"03:46"},
    {songName: "Shiv Tandav",filePath:"songs/7.mp3",coverPath:"covers/7.jpg",duration:"09:13"},
    {songName: "Ye raatein",filePath:"songs/8.mp3",coverPath:"covers/8.webp",duration:"03:39"},
    {songName: "Khaab",filePath:"songs/9.mp3",coverPath:"covers/9.jpeg",duration:"03:21"}
]
songItems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
    element.getElementsByClassName("timeStamp")[0].innerHTML = songs[i].duration
})

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
        gif.style.opacity= 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate',()=>{

    // Update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
    songItemPlay.forEach((element)=>{
    element.classList.add('fa-circle-play')
    element.classList.remove('fa-circle-pause')
})
}

songItemPlay.forEach((element)=>{
 element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
 })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0 
    }
    else{
        songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0 
    }
    else{
        songIndex-=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
