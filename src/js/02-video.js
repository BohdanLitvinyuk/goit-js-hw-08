import throttle from 'lodash.throttle';

import Vimeo from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const saveData = localStorage.getItem('videoplayer-current-time');
const parsedData = JSON.parse(saveData);

player.on('timeupdate', throttle(function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));


player.setCurrentTime(parsedData).then(function(seconds) {
    // seconds = the actual time that the player seeked 
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        
        default:
            // some other error occurred
            break;
    }
});

   