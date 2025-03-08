export const createMusicCatching = () => {
  const music = document.createElement('audio');
  music.src =
    'https://res.cloudinary.com/dr2vohk2z/video/upload/v1741453166/GamesHub/CatchingBanana/BGMusic_nsfore.mp3';
  music.volume = '0.3';
  music.loop = true; //para que cuando acabe siga en play en loop
  return music;
};
