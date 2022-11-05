import { saveToLocalStorage, loadFromLocalStorage } from './safe-storage-module';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIMEO_CURRENT_TIME_KEY = "videoplayer-current-time";
let vimeoTimeOffset = loadFromLocalStorage(VIMEO_CURRENT_TIME_KEY) ?? 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(vimeoTimeOffset);

window.addEventListener("beforeunload", ()=>player.pause())

const throttledTimeUpdateInStorege = throttle(UpdateTimeInStorage, 1000);

player.on('timeupdate', throttledTimeUpdateInStorege);
if (vimeoTimeOffset>0) player.play();

function UpdateTimeInStorage({seconds}) {
    saveToLocalStorage(VIMEO_CURRENT_TIME_KEY, seconds);
}