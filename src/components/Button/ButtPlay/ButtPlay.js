//funcion para crear botón PLAY para los juegos
export const createButtonPlay = () => {
  const buttonPlay = document.createElement('button');
  buttonPlay.innerHTML =
    '<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1741453152/GamesHub/CatchingBanana/play_kucywi.png"   alt="play" />';

  buttonPlay.className = 'play';
  const img = document.createElement('img');
  img.src = './';

  return buttonPlay;
};

//cuando hago click
export const buttonPlayEvent = (buttonPlay) => {
  buttonPlay.remove();
};
