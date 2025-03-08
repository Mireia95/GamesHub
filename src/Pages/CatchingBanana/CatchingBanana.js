//*juegos Catching banana
import './CatchingBanana.css';
import './CatchingWebResponsive.css';

import { startCathing } from './Start/StartCatching';
import { cleanMain } from '../../Utils/CleanMain';
import { createMusicCatching } from '../../Utils/Music';
import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Button/ButtPlay/ButtPlay';
import { createRulesCatching } from '../../components/GameRules/GameRules';
import { printBackToHome } from '../../components/Button/ButtBackHome/ButtHome';

//inicializar el juego
export const initCatch = () => {
  cleanMain();

  const main = document.querySelector('main');
  const divGame = document.createElement('div');
  divGame.id = 'catching';
  const buttonPlay = createButtonPlay(); //creo boton play

  const music = createMusicCatching(); //añado musica al juego

  const rulesGame = createRulesCatching(); //pinto las reglas del juego

  buttonPlay.addEventListener('click', () => {
    music.play(); //empieza la  musica
    buttonPlayEvent(buttonPlay); //eliminoel boton play
    rulesGame.remove(); //elimino las reglas
    startCathing(); //empiezo el juego
  });

  divGame.append(rulesGame);
  divGame.append(buttonPlay);
  divGame.append(music);
  main.append(divGame);

  printBackToHome(); //pinto el boton que permite volver a elegir un juego
};
