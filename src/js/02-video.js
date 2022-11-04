//import { modulesaveToLocalStorage, loadFromLocalStorage } from './safe-storage-module';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {console.log('played the video!');});
