import * as assert from 'assert'
import * as mocha from 'mocha'

import { IP, IPFactory } from '../07/IP'


describe('day 7', () => {
	it('should find password', () => {
		let input = `abba[mnop]qrst
		abcd[bddb]xyyx
		aaaa[qwer]tyui
		ioxxoj[asdfgh]zxcvbn`;

		IPFactory.make(input).forEach(ip => {
			console.log(`${ip.supportsTls()}`);
		})
		// assert.equal(new IP('ioxxoj[asdfgh]zxcvbn').supportsTls(), true);
	})
})
