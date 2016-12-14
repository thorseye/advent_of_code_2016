import { Screen } from './Screen';
import { input } from './input'

export const Puzzle1 = 1;
export const Puzzle2 = 2;


let s = new Screen(7, 3);
s.rect(3, 2);
s.draw();
s.rotateColumn(1, 1);
s.draw();