import { reloadGame } from '../../../components/Button/ButtReload/ButtReload';
import { createMusicCatching } from '../../../Utils/Music';

import { printHighScore } from '../Score&Lifes/Highscore';
import { updateScore } from '../Score&Lifes/UpdateScore';
import { startCathing } from '../Start/StartCatching';
import './Gameover.css';

export const printGameOver = () => {
  const music = document.querySelector('audio');
  music.pause();
  music.currentTime = 0; //para resetearlo y que empiece desde el principio si le doy a play otra vez

  const divGame = document.querySelector('#catching');

  const divButtons = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerText = 'GAME OVER';
  h2.className = 'gameover';

  const highScoreButt = document.createElement('button'); //boton para enseñar los highscores
  highScoreButt.innerHTML =
    "<img alt='highscore' src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1741453154/GamesHub/CatchingBanana/trofeo_xgqqcw.png'/> ";
  const reloadButt = reloadGame('CatchingBanana'); //boton para jugar de nuevo

  divButtons.className = 'buttGameOver';

  let arrayScore = updateScore(); //esta funcion devuelve el array con los 3 mejores scores
  console.log(arrayScore);

  highScoreButt.addEventListener('click', () => {
    printHighScore(arrayScore);
    h2.remove();
    divButtons.remove();
  });

  reloadButt.addEventListener('click', () => {
    divGame.innerHTML = '';
    const music = createMusicCatching();
    divGame.append(music);
    music.play();
    startCathing();
  });

  divGame.append(h2);
  divButtons.append(highScoreButt);
  divButtons.append(reloadButt);
  divGame.append(divButtons);
};
