const i1 = Math.floor(Math.random() * 4);
const j1 = Math.floor(Math.random() * 4);
const [i2, j2] = (() => {
  let x, y;
  do {
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
  } while (x === i1 && y === j1);
  return [x, y];
})();

const randomValue1 = Math.random() < 0.9 ? 2 : 4;
const randomValue2 = Math.random() < 0.9 ? 2 : 4;
const init: (number | null)[][] = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];
if (init[i1] !== undefined) init[i1][j1] = randomValue1;
if (init[i2] !== undefined) init[i2][j2] = randomValue2;

export const initArr = () => init;
