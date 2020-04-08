const radioList = [
    {name: 'maxfm', url:'http://maxfm1023.thrilliant.com.ng:9193/stream/1/'},
    {name: 'beatfm', url: 'http://beatfmlagos.atunwadigital.streamguys1.com/beatfmlagos'},
    {name: 'nijafm', url: 'http://naijafmlagos.atunwadigital.streamguys1.com/naijafmlagos'},
    {name: 'inspirationfm', url: 'http://159.65.180.178:8550/stream/1/'},
    {name: 'smoothfm', url: 'http://smoothlive.smooth981.fm:8000/smoothlivefm128'},
    {name: 'rhythmfm', url: 'http://155.93.110.20:88/broadwave.mp3?src=1&rate=1&ref='},
    {name: 'contemporarygospelfm', url: 'http://pipe.ukprostream.com:8090/stream/1/'},
    {name: 'classicfm', url: 'http://classicfmlagos.atunwadigital.streamguys1.com/classicfmlagos'}
]

let radioPlayerImage = document.getElementById('radio-image'),
    playPause = document.getElementById('pause-button'),
    nextBTN = document.getElementById('next-button')

var song = new Audio();
var forEach = Array.prototype.forEach;
let currentSong = 0;


window.onload = loadSong;
 
function loadSong (){
    song.src = radioList[currentSong].url;
    console.log(song.src)
    song.volume = volume.value;
    console.log(song.volume);
    song.play();
}
function radioElement(beat){
    let beats = beat.src;
    document.getElementById('radio-image').style.backgroundImage = `url('${beats}')`;
    currentSong = parseInt(beat.title, 10)
    loadSong()
}
function playOrPauseSong (img){
    if (song.paused || song.ended){
        song.play()
        img.id = 'pause-button'
        img.title = 'pause'
        console.log(img.id);
    } else{
        song.pause();
        img.id = 'play-button'
        img.title = 'play'
    }
}
function next(){
    currentSong++;
    currentSong = (currentSong>7)? 0: currentSong;
    loadSong();
}
function prev(){
    currentSong--;
    currentSong = (currentSong < 0)? radioList.length - 1: currentSong;
    loadSong();
}
function adjustVolume(){
    song.volume = volume.value;
}
function newStaionCheck (){
    let items = document.querySelectorAll('.radio-img');
    forEach.call(items, (item)=>{
    })
}