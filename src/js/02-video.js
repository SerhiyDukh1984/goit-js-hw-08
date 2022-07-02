import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const timeOfPause = function (timeupdate) {
  const currentTime = JSON.stringify(timeupdate);
  console.log(currentTime);
  localStorage.setItem(CURRENT_TIME_KEY, currentTime);
};

const currentPause = function () {
  const localTime = localStorage.getItem(CURRENT_TIME_KEY);
  const timeForPlay = JSON.parse(localTime);

  player.setCurrentTime(timeForPlay.seconds);
};

try {
  currentPause();
} catch (error) {
  console.log('Watching time is 0 seconds');
}

player.on('timeupdate', throttle(timeOfPause, 1000));
