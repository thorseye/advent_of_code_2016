import { IP, IPFactory } from './IP';
import { input } from './input'

export const Puzzle1 = IPFactory.make(input).filter(ip => ip.supportsTls()).length;
export const Puzzle2 = IPFactory.make(input).filter(ip => ip.supportsSsl()).length;