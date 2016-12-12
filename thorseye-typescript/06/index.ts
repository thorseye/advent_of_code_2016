import { Decoder } from './Decoder';
import { input } from './input'

export const Puzzle1 = new Decoder(input).decode();
export const Puzzle2 = new Decoder(input).decode(true);  