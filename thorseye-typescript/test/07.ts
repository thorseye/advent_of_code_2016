import * as assert from 'assert'
import * as mocha from 'mocha'

import { IP, IPFactory } from '../07/IP'


describe('day 7', () => {
	it('should be correct', () => {
		assert.equal(new IP('abba[mnop]qrst').supportsTls(), true);
		assert.equal(new IP('abcd[bddb]xyyx').supportsTls(), false);
		assert.equal(new IP('aaaa[qwer]tyui').supportsTls(), false);
		assert.equal(new IP('ioxxoj[asdfgh]zxcvbn').supportsTls(), true);
	})
	it('should be correct', () => {
		let ip = new IP('aba[bab]xyz');
		// ip.sequences.forEach(s => console.log(s));
		// console.log(ip, ip.supportsSsl());
		assert.equal(new IP('aba[bab]xyz').supportsSsl(), true);
		assert.equal(new IP('xyx[xyx]xyx').supportsSsl(), false);
		assert.equal(new IP('aaa[kek]eke').supportsSsl(), true);
		assert.equal(new IP('zazbz[bzb]cdb').supportsSsl(), true);
	})
})
