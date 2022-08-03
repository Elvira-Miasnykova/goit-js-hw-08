import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
//const throttle = require('lodash/throttle');


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';


player.on('play', function() {
    console.log('played the video!');
});

onSavedTimePlay();

//const onPlay = function(data) {
    // data is an object containing properties specific to that event
//};

// player.on('play', onPlay);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
    const pausedTime = e.seconds;
    console.log(e.seconds);
    localStorage.setItem(LOCAL_KEY, pausedTime);
    }  

function onSavedTimePlay() {
    const savedTime = localStorage.getItem(LOCAL_KEY);
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
}




