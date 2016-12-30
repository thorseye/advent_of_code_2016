import * as assert from 'assert'
import * as mocha from 'mocha'

import { Section } from '../09/Section'


describe('day 9', () => {
	it('should be correct', () => {
		assert.equal(new Section('ADVENT').decompress(), 'ADVENT');
		assert.equal(new Section('ADVENT').decompress().length, 6);

		assert.equal(new Section('A(1x5)BC').decompress(), 'ABBBBBC');
		assert.equal(new Section('A(1x5)BC').decompress().length, 7);

		assert.equal(new Section('(3x3)XYZ').decompress(), 'XYZXYZXYZ');
		assert.equal(new Section('(3x3)XYZ').decompress().length, 9);

		assert.equal(new Section('A(2x2)BCD(2x2)EFG').decompress(), 'ABCBCDEFEFG');
		assert.equal(new Section('A(2x2)BCD(2x2)EFG').decompress().length, 11);

		assert.equal(new Section('(6x1)(1x3)A').decompress(), '(1x3)A');
		assert.equal(new Section('(6x1)(1x3)A').decompress().length, 6);

		assert.equal(new Section('X(8x2)(3x3)ABCY').decompress(), 'X(3x3)ABC(3x3)ABCY');
		assert.equal(new Section('X(8x2)(3x3)ABCY').decompress().length, 18);

		assert.equal(new Section('A(2x10)BC').decompress(), 'ABCBCBCBCBCBCBCBCBCBC');
		assert.equal(new Section('A(2x10)BC').decompress().length, 21);
	})

	it('should do recursive decompression', () => {
		assert.equal(new Section('(3x3)XYZ', true).decompress(), 'XYZXYZXYZ');
		assert.equal(new Section('X(8x2)(3x3)ABCY', true).decompress(), 'XABCABCABCABCABCABCY');
		assert.equal(new Section('(27x12)(20x12)(13x14)(7x10)(1x12)A', true).decompress(), Array(241920).fill('A').join(''));
		assert.equal(new Section('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', true).decompress().length, 445);
	})

	it('should be ok', () => {
		const str = `(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN`;
		const s = new Section(str, true);
		console.log('length ', s.decompressedLength());
	})
})
