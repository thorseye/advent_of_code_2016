import * as assert from 'assert'
import * as mocha from 'mocha'

import { Decoder } from '../06/Decoder'
// import { input } from '../06/input'
import { } from '../06'

describe('day 6', () => {

	describe('day 6', () => {
		it('should find password', () => {
			const input = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`;
			assert.equal(new Decoder(input).decode(), 'easter');
			assert.equal(new Decoder(input).decode(true), 'advent');
		})
	})
})