import { Screen } from './Screen';
import { input } from './input'

let s2 = new Screen(50, 6);
s2.readInstructions(input);
s2.draw();

export const Puzzle1 = s2.countLitPixels();
export const Puzzle2 = s2.draw();