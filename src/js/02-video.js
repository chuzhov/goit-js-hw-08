import { saveToLocalStorage, loadFromLocalStorage } from './safe-storage-module';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import toastr from "toastr";

const VIMEO_CURRENT_TIME_KEY = "videoplayer-current-time";
let vimeoTimeOffset = loadFromLocalStorage(VIMEO_CURRENT_TIME_KEY) ?? 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(vimeoTimeOffset);
if (vimeoTimeOffset > 0) {
  player.play();
  toastr.info("Playback restored.");
}

//вимикаємо відео при втраті фокуса, та вмікаємо при поверненні до вкладки
document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState !== 'visible') 
      {player.pause();}
    else 
      {player.play()};
  });

const throttledTimeUpdateInStorege = throttle(UpdateTimeInStorage, 1000);

player.on('timeupdate', throttledTimeUpdateInStorege);

function UpdateTimeInStorage({seconds}) {
    saveToLocalStorage(VIMEO_CURRENT_TIME_KEY, seconds);
}
