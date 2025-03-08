export const reloadGame = (game) => {
  const buttonReload = document.createElement('button');
  buttonReload.innerHTML = `<img src='./assets/${game}/reload.png' alt'reload' />`;
  return buttonReload;
};
