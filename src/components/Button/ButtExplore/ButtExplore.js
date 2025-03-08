import { printGames } from '../../GamesInit/GamesInit';
import './ButtExplore.css';

export const printButtonExplore = () => {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.innerText = 'Explorar juegos';
  button.className = 'buttonExplore';
  main.append(button);
  button.addEventListener('click', () => {
    button.remove();
    console.log('print juegos');
    printGames();
  });
};
