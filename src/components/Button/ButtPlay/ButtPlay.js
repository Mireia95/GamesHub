//funcion para crear botón PLAY para los juegos
export const createButtonPlay = () => {
  const buttonPlay = document.createElement('button');
  buttonPlay.innerHTML =
    '<img src="./assets/CatchingBanana/play.png" alt="play" />';

  buttonPlay.className = 'play';

  return buttonPlay;
};

//cuando hago click
export const buttonPlayEvent = (buttonPlay) => {
  buttonPlay.remove();
};
