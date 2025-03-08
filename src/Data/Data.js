//creo array con juegos

import { initCatch } from '../Pages/CatchingBanana/CatchingBanana';
import { initPuzzle } from '../Pages/Puzzle/Puzzle';

export let arrayButtonGames = [
  {
    nombre: 'Catching banana',
    description: 'Recoge más bananas que puedas',
    BgImageHome:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1728589538/ROCKTHECODE/Proyecto5_gamesHub/CatchingBanana/CatchingHome.png',
    game: initCatch
  },
  {
    nombre: 'Puzzle',
    description: 'Completa el puzzle en el menos tiempo posible',
    BgImageHome:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1728589842/ROCKTHECODE/Proyecto5_gamesHub/Puzzle/puzzleAll_b0uync.png',
    game: initPuzzle
  }
];
