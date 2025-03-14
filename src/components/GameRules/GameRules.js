import './GameRules.css';

export const createRulesCatching = () => {
  const pRules = document.createElement('p');
  pRules.className = 'rulesCatching';
  pRules.innerText =
    'Recoge los plátanos que van cayendo. Cuantos más plátanos recojas más puntos obtendrás. Cuidado, si el plátano toca el suelo pierdes una vida. Si ves una rama no la recojas: perderás puntos.';
  return pRules;
};

export const createRulesPuzzle = () => {
  const pRules = document.createElement('p');
  pRules.className = 'rulesPuzzle';
  pRules.innerText = 'Acaba el puzzle en el menor tiempo posible.';
  return pRules;
};
