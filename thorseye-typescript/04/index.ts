import { Room, RoomFactory } from './Room';
import { input } from './input'


export const Puzzle1 = RoomFactory.make(input).filter(r => r.real).map(r => r.sectorId).reduce((a, b) => a + b, 0)
export const Puzzle2 = RoomFactory.make(input).find(room => room.decrypt() == 'northpole object storage').sectorId