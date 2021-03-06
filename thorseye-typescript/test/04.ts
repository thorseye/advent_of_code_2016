import * as assert from 'assert'
import * as mocha from 'mocha'

import { Room, RoomFactory } from '../04/Room'
import { input } from '../04/input'
import { } from '../04'

describe('day 4', () => {

	describe('day 4, puzzle 1', () => {
		it('should create rooms', () => {
			const rooms = RoomFactory.make(`
				aaaaa-bbb-z-y-x-123[abxyz]
				a-b-c-d-e-f-g-h-987[abcde]
				not-a-real-room-404[oarel]
				totally-real-room-200[decoy]
			`)

			let sumOfSectorIds = rooms.filter(r => r.real).map(r => r.sectorId).reduce((a, b) => a + b, 0);
		})

		it('should create rooms base on input', () => {
			const rooms = RoomFactory.make(input)

			let sumOfSectorIds = rooms.filter(r => r.real).map(r => r.sectorId).reduce((a, b) => a + b, 0);
			assert.equal(sumOfSectorIds, 409147);
		})
	})


	describe('day 4, puzzle 2', () => {
		it('should create decrypt', () => {
			let room = new Room(`qzmt-zixmtkozy-ivhz-343[qmtzk]`);
			assert.equal(room.decrypt(), 'very encrypted name');
		})

		it('should find a specific room', () => {
			const rooms = RoomFactory.make(input)
			let room = rooms.find(room => room.decrypt() == 'northpole object storage');
			assert.equal(room.sectorId, 991);
		})
	})
})