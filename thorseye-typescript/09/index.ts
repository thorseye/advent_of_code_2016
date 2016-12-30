import { Section } from './Section';
import { input } from './input'

export const Puzzle1 = new Section(input).decompress().length;
export const Puzzle2 = new Section(input, true).decompressedLength();