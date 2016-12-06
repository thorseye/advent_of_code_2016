import * as assert from 'assert'
import * as mocha from 'mocha'

import { Door } from '../05/Door'
import { input } from '../05/input'
import { } from '../05'

describe('day 5', () => {

	describe('day 5, puzzle 1', () => {
		it('should find password', () => {
			let door = new Door('abc');
			assert.equal(door.password, '18f47a30');
		})
		it('should find password 2', () => {
			let door = new Door(input);
			// assert.equal(door.password, '18f47a30');
		})
	})


	// describe('day 4, puzzle 2', () => {
	// 	it('should create decrypt', () => {
	// 		let room = new Room(`qzmt-zixmtkozy-ivhz-343[qmtzk]`);
	// 		assert.equal(room.decrypt(), 'very encrypted name');
	// 	})

	// 	it('should find a specific room', () => {
	// 		const rooms = RoomFactory.make(input)
	// 		let room = rooms.find(room => room.decrypt() == 'northpole object storage');
	// 		assert.equal(room.sectorId, 991);
	// 	})
	// })
})