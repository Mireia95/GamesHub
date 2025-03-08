export const createMusicCatching = () => {
  const music = document.createElement('audio');
  music.src = './assets/CatchingBanana/BGMusic.mp3';
  music.volume = '0.3';
  music.loop = true; //para que cuando acabe siga en play en loop
  return music;
};
